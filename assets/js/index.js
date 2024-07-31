$("#add_user").submit(function(event){
    alert("Data inserted successfuly");
})


// $("#update_user").submit(function(event){
//     event.preventDefault();
//     var unindexed_array=$(this).serializeArray();
//     console.log(unindexed_array)
// });





//delete

if(window.location.pathname == "/"){
    $ondelete=$(".table tbody td a.delete");
    $ondelete.click(function(){
    var id=$(this).attr("data-id")

    var request={
        "url":`http://localhost:8080/api/users/${id}`,
        "method":"DELETE"
    }
    if(confirm("do you want to delete")){
        $.ajax(request).done(function(response){
            alert("data delete successfully");
            location.reload()
        })
    }
    })
}