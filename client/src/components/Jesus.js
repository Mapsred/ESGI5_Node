export default function Jesus() {
    var undef;
    var _jesusBody;

    // back to life in 3 days ---
    //=====================
    this.walkOnWater = function () {
        console.log("Jesus walks on water");
        var elems = document.querySelectorAll('*');
        for (var i = 0, len = elems.length; i < len; i++) {
            elems[i].style.float = Math.random() < 0.5 ? 'left' : 'right';
        }
    };

    this.die = function () {
        //check if Jesus died to prevent him to die again
        if (_jesusBody) return;
        _jesusBody = exports.Jesus;
        exports.Jesus = undef;

        // back to life in 3 days ---
        //=====================
        setTimeout(function () {
            exports.Jesus = _jesusBody;
        }, 3 * 24 * 60 * 60 * 1000);
    };

    this.waterToWine = function () {
        document.body.innerHTML = document.body.innerHTML.replace(new RegExp('water', 'gi'), 'wine')
    };

    this.isDead = function () {
        return !!_jesusBody;
    };

}