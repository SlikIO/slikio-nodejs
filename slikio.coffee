$ = require 'jquery'
class exports.SlikIO
	constructor: (privatekey) ->
		@private_key = privatekey
		@baseUrl = "https://app.slik.io/api/v1/"

		this.post = (url, data) ->
			$.ajax({
 	 	 	  type: "POST",
 	 	 	  url: @baseUrl + url,
 		 	  data: {data: data},
 		 	  username: @private_key,
		  })

	sendData: (collection_id, data) ->
		this.post("collections/#{collection_id}/data", data)