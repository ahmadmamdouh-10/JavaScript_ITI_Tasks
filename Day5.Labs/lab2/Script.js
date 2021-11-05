var xhr = new XMLHttpRequest();

xhr.open("get", "https://jsonplaceholder.typicode.com/posts");
xhr.send();
xhr.addEventListener("readystatechange", function () {

    if (xhr.readyState === 4) {
        if (xhr.status === 200) {

           var postsarr = JSON.parse(xhr.response)//json object
            var table = document.getElementById("mytable");
            for (var i = 0; i < postsarr.length; i++) {

                var tr = document.createElement("tr");
                tr.innerHTML = "<td>" + postsarr[i].title + "</td><td>" + postsarr[i].body + "</td>";
                table.append(tr);
            }
            // console.log(usersarr);
        }
    }
})
