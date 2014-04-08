describe("b-datepicker", function() {
    var datepicker;

    beforeEach(function() {
        datepicker = document.createElement('b-datepicker');
        document.body.appendChild(datepicker);
    });

    afterEach(function() {
        document.body.removeChild(datepicker);
    });

    var getPickerInput = function() {
        // FIXME: ideally this component should use shadowDOM...
        return datepicker.querySelector('input');
    };

    var getCalendar = function() {
        return document.querySelector('.pika-single');
    };

    var pickDay = function(day) {
        var btn = document.querySelector('td[data-day="'+day+'"] button');
        var event = document.createEvent("MouseEvent");
        event.initEvent('click', true, true);
        btn.dispatchEvent(event);
    };

    it("should hide its calendar by default", function() {
        expect(getCalendar().classList.contains('is-hidden')).to.be.true;
    });

    // TODO: These tests break too often... We need to test the API only
    // it("should fire an event when its input gets the focus", function(done) {
    //     datepicker.addEventListener('b-open', function() {
    //         expect(true).to.be.true;
    //         done();
    //     });
    //     getPickerInput().focus();
    // });

    // it("should display a picked date in its input", function() {
    //     datepicker.addEventListener('b-select', function() {
    //         console.log(datepicker.getDate());
    //         done();
    //     });
    //     getPickerInput().focus();
    //     pickDay(2);
    //     console.log(datepicker.getDate());
    // });
});