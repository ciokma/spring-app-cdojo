function delete_object (id, name){
	swal({
	  title: "Are you sure you want to delete the person? " + name,
	  text: "Once deleted, you will not be able to recover this imaginary file!",
	  icon: "warning",
	  buttons: true,
	  dangerMode: true,
	})
	.then((OK) => {
	  if (OK) {	
		  $.ajax({
			  url: "/delete/"+id,
			  success: function(res){
				  console.log(res)
			  }
		  });
	    swal("Poof! Keeping your record :)", {
	      icon: "success",
	    }).then((ok)=>{
			if(ok){
				location.href="/listar";
			}
		});
	  } else {
	    swal("Your imaginary file is safe!");
	  }
	});
}