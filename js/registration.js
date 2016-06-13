/**
 * Created by zhoulanhong on 6/13/16.
 */

function Registration() {

}

Registration.prototype.submitOrder = function (data) {

    var dtd = $.Deferred();
    var subData = {
        doctor: data.doctor,
        time: data.time
    }
    $.ajax({
        url: '/sboss/createOrder',
        dataType: 'json',
        type: 'post',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(subData),
        success: function (data) {
            dtd.resolve(data);
        },
        error: function (err) {
            dtd.reject(err);
        }
    });
    return dtd.promise();
}
