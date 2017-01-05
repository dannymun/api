var template = '<div class="card"><div class="card-img"><img src=":url:" alt="" class="imgShow"></div><h2 class="title">:title:</h2><p class="sumary">:sumary:</p></div>'

$.ajax(
	{
		url:"http://api.tvmaze.com/shows",
		success: function (shows,status,info) {
			shows.forEach(function (show) {
				var card = template
					.replace(':title:', show.name)
					.replace(':url:', show.image.medium)
					.replace(':sumary:', show.summary)

				$('#gusgri')
					.append($(card))
			})
		},
		dataType:"json"
	}
)

