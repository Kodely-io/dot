/**
 * Kodely dot an implementation of LOGO turtle
 */
//% weight=100 color=#0fbc11 icon="\uf111"
namespace dot {

    //% block
    let _x = 2;
    let _y = 2;
    let _direction = 1; // 1-N 2-E 3-S 4-W

    let _pen = 1; //1-down 0-up

    let _turtleSpeed = 5;

    let _prevx = 2;
    let _prevy = 2;
    let _prevpixel = 0;
    /**
     * Sets the turtle to home position
     */
    //% blockId=turtlehome
    //% block="home"
    //% weight=1000
    export function home(): void {
        // Add code here
        led.plotBrightness(_x, _y, _prevpixel * 100)
        _x = _y = _prevx = _prevy = 2;
        _direction = 1;
        _prevpixel = 0;
        led.plotBrightness(_x, _y, 255);

    }

    /**
     * Turn the pen off
     */
    //% blockId=turtle_pen_up
    //% block="penUp"
    //% weight=900
    export function penUp(): void {
        _pen = 0;
    }

    /**
     * Turn the pen on, so will write as the turtle moves
     */
    //% blockId=turtle_pen_down
    //% block="penDown"
    //% weight=890
    export function penDown(): void {
        _pen = 1;
    }

    /**
     * Set the speed at which the turtle moves, 1 is slow, 10 is fast, default moves at moderate speed
     * 
     * @param turtleSpeed:Controls the speed the turtle moves.
     */
    //% blockId=turtle_speed
    //% block="speed %turtleSpeed"
    //% turtleSpeed.min=1 turtleSpeed.max=10 turtleSpeed.defl=5
    //% weight=850
    export function speed(turtleSpeed: number): void {
        _turtleSpeed = turtleSpeed;
    }

    /**
     * Turn the turtle right
     */
    //% blockId=turtleright
    //% block="turn right"
    //% weight=700
    export function turnRight(): void {
        _direction = _direction + 1 > 4 ? 1 : _direction + 1;
    }

    /**
     * Turn the turtle left
     */
    //% blockId=turtleleft
    //% block="turn left"
    //% weight=690
    export function turnLeft(): void {
        _direction = _direction - 1 < 1 ? 4 : _direction - 1;
    }

    /**
     * Move the turtle forward
     */
    //% blockId=turtle_move_forward
    //% block="move forward"
    //% weight=650
    export function forward(): void {
        let _incr = 1;
        if (_direction == 1 || _direction == 4) _incr = -1

        if (_pen) {
            led.plotBrightness(_x, _y, 100)
        } else {
            led.plotBrightness(_x, _y, _prevpixel * 100)
        }

        if (_direction == 2 || _direction == 4) {
            _x = _x + _incr
            _x = _x > 4 ? 4 : _x < 0 ? 0 : _x
        }
        else {
            _y = _y + _incr
            _y = _y > 4 ? 4 : _y < 0 ? 0 : _y
        }
        _prevpixel = led.point(_x, _y) ? 1 : 0;
        led.plotBrightness(_x, _y, 255);
        basic.pause(_turtleSpeed * 100)
    }

    /**
     * Move the turtle backward
     */
    //% blockId=turtle_move_backward
    //% block="move backward"
    //% weight=600
    export function backward(): void {
        let _incr = -1;
        if (_direction == 1 || _direction == 4) _incr = 1

        if (_pen) {
            led.plotBrightness(_x, _y, 100)
        } else {
            led.plotBrightness(_x, _y, _prevpixel * 100)
        }

        if (_direction == 2 || _direction == 4) {
            _x = _x + _incr
            _x = _x > 4 ? 4 : _x < 0 ? 0 : _x
        }
        else {
            _y = _y + _incr
            _y = _y > 4 ? 4 : _y < 0 ? 0 : _y
        }
        _prevpixel = led.point(_x, _y) ? 1 : 0;
        led.plotBrightness(_x, _y, 255);
        basic.pause(_turtleSpeed * 100)
    }

    /**
     * Erase the pixel at current position
     */
    //% blockId=erase
    //% block="erase"
    //% weight=500
    export function erase(): void {
        led.plotBrightness(_x, _y, 0);
    }

    /**
     * Clear the screen
     */
    //% blockId=clear_screen
    //% block="clear screen"
    //% weight=400
    export function clearScreen(): void {
        basic.clearScreen()
        home();
    }

    /**
     * Fill Screen 
     */
    //% blockId=fill_screen
    //% block="fill screen"
    //% weight=390
    export function fillScreen(): void {
        led.setBrightness(100)
        let img = images.createImage(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
        `);
        img.showImage(0);
        home();
    }

}