describe('Helper function', () => {
    it('can add leading zero', () => {
        assert.equal(addLeadingZero(9), '09');
    });

    it('can\'t add leading zero', () => {
        assert.equal(addLeadingZero(10), '10');
    });
    
});

describe('Color Clock', () => {
    let clock = document.createElement("div");
    clock.id = 'clock';
    document.body.appendChild(clock);
    const clockElementById = document.querySelector("#clock");
    colorClock();

    it('can display clock', function() {
        this.retries(10);
        assert.isNotNull(clockElementById);
        assert.equal(clockElementById.textContent, (new Date).toTimeString().substring(0, 8));
    });

    it('can change background', function() {
        const bodyBgColor = document.body.style.backgroundColor;
        this.retries(10);
        assert.isNotEmpty(bodyBgColor);
        assert.notInclude(['#000000', 'rgb(0, 0, 0)'], bodyBgColor);
        assert.match(bodyBgColor, RegExp('rgb|#'))
    });
    
});
  