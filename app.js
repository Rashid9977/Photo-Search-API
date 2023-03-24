$("#myForm").submit(function (e) {
    e.preventDefault()

    var search = $('#search').val()
    var url = 'https://api.unsplash.com/search/photos?query=' + search + '&client_id=eHI4CVekWdDftRkWcmiSVIRjUBRrlx1eAYnlEaUJVNY'

    $.ajax({
        method: 'GET',
        url: url,
        success: function (data) {
            data.results.forEach(photo => {
                $('#result').append(`
                <img style="width:300px;" src="${photo.urls.regular}"/>
                `)
            });
        }
    })
})