<script>
$(document).ready(function() {
    $("#name").hide();
    $("#category").hide();

    $("#nameData").on('input', function() {
        $("#name").hide();
    });

    $("#categoryData").on('input', function() {
        $("#category").hide();
    });

    $("#submit").click(function() {
        let nameData = $("#nameData").val();
        let categoryData = $("#categoryData option:selected").val();

        // اگر هر دو خالی باشند
        if (nameData == '' && categoryData == '') {
            $("#name").show();
            $("#category").show();
            return false;
        }

        if (nameData == '') {
            $("#name").show();
            return false;
        }

        if (categoryData == '') {
            $("#category").show();
            return false;
        }

        if (nameData.length < 4) {
            $("#name").text("حداقل باید 4 کاراکتر وارد کنید.").show();
            return false;
        }
    });
});
</script>
