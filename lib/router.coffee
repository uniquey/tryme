Router.configure
	layoutTemplate:'layout'

Router.map ->
	@route 'shouye',
		path:'/'
	@route 'exercising',
		path:'/exercise'
	@route 'relearnlist'
	@route 'relearn'