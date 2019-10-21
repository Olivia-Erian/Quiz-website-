// Start of box function
$(document).ready(function () {

    var tabWrapper = $('#tab-block'),
        tabMnu = tabWrapper.find('#tab-block  a');

    $('#tab-block > a').click(function () {
        var before = $('#tab-block a.active');
        before.removeClass('active');
        $(this).addClass('active');
    });

});
// End of box function

// Start of live prev image function
$(function () {

    // Viewing Uploaded Picture On Setup Admin Profile
    function livePreviewPicture(picture) {
        if (picture.files && picture.files[0]) {
            var picture_reader = new FileReader();
            picture_reader.onload = function (event) {
                $('#uploaded').attr('src', event.target.result);
                $("#preview").attr("src", event.target.result)
            };
            picture_reader.readAsDataURL(picture.files[0]);
        }
    }

    $('.setup-picture form .picture input').on('change', function () {
        $('#uploaded').fadeIn();
        livePreviewPicture(this);
        $('.picture').css("display", "none");
        $('#uploaded').removeClass("d-none")
        $('#preview').removeClass("d-none")

    });

});
// End of live prev image function

// Start of dropdown list function
function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('span');
    this.opts = this.dd.find('ul.dropdown > li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}
DropDown.prototype = {
    initEvents: function () {
        var obj = this;

        obj.dd.on('click', function (event) {
            $(this).toggleClass('active');
            return false;
        });

        obj.opts.on('click', function () {
            var opt = $(this);
            obj.val = opt.text();
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
        });
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
}

$(function () {

    var dd = new DropDown($('#dd'));

    $(document).click(function () {
        // all dropdowns
        $('.wrapper-dropdown-3').removeClass('active');
    });

});
// End of dropdown list function

// Start of live prev text function
var titleprev = document.getElementById('title');

titleprev.onkeyup = titleprev.onkeypress = function () {
    document.getElementById('prevTitle').innerHTML = this.value;
}

var descprev = document.getElementById('desc');

descprev.onkeyup = titleprev.onkeypress = function () {
    document.getElementById('prevDesc').innerHTML = this.value;
}

// End of live prev text function

