var app = {
	initialize: function() {
		this.bind();
	},
	bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
    	navigator.notification.alert('I\'m Hello worlding!!');
    }
}