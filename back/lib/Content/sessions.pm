################################################################################

sub do_create_sessions {	

	my $d = $_REQUEST {data};

	my $user = sql (users => [
		[login => $d -> {login}],
		[fake  => 0],
		[LIMIT => 1],
	], 'roles(name)');

	if ($user -> {id}) {
	
		my $hash = password_hash ($user -> {salt}, $d -> {password});

		$hash eq $user -> {password} or return {};

	}		
	elsif ($preconf -> {auth} -> {allow_test_admin} and $d -> {login} eq 'test' and $d -> {password} eq 'test') {

		$user = sql (users => -1, 'roles(name)')

	}
	else {

		return {};
			
	}

	our $_USER = $user;

	my $data = {timeout => $preconf -> {auth} -> {sessions} -> {timeout}};

	$data -> {user} -> {$_} = $_USER -> {$_} foreach qw (id label is_read_only);

	$data -> {user} -> {role} = $_USER -> {role} -> {name};
		
	$data -> {user} -> {opt} = {};

	sql (user_options => [
			[fake    => 0],
			[is_on   => 1],
			[id_user => $data -> {user} -> {id}],
		],
		'voc_user_options(name)',
	sub {
		
		$data -> {user} -> {opt} -> {$i -> {voc_user_option} -> {name}} = 1
		
	});

	sql_do ("DELETE FROM sessions WHERE id_user = ?", $_USER -> {id});

	start_session ($_USER -> {id});

	set_cookie (-name => 'user', -value => "$_USER->{uuid}", -httponly => 1, -path => '/_back');

       	$data;

}

################################################################################

sub do_delete_sessions {
	
	sql_do ("DELETE FROM sessions WHERE id = ?", $_REQUEST {sid});

       	{};

}

1;