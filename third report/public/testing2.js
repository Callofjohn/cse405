(function() {
    a.login = function() {
        console.log("login");
        b_view.style.display = "block";
        b_view_edit_btn.disabled = false;
    }

    a.logout =  function(){
        console.log("logout");
    }

    document.addEventListener('DOMContentLoaded', () => {
        b_view_edit_btn.addEventListener('click', function() {

        b_view_edit_btn.disabled = true
        b_view.style.display = "none"
        b_edit.style.display = "block"
        b_edit.save.btn.disabled = false
        b_edit_cancel_btn.disabled = false
        })

        b_edit_cancel_btn.addEventListener('click', function() {

            b_view_edit_btn.disabled = true
            b_view.style.display = "block"
            b_edit.style.display = "none"
            b_edit.save.btn.disabled = true
            b_edit_cancel_btn.disabled = true
            })
        

        b_edit_save_btn.addEventListener('click', function() {

            b_view_edit_btn.disabled = false
            b_view.style.display = "block"
            b_edit.style.display = "none"
            b_edit.save.btn.disabled = true
            b_edit_cancel_btn.disabled = true
            })


        })
    
})();