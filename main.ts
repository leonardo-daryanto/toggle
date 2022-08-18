namespace basic {
    /**
     *  for changing string
     */
    //% block
    //% group="Change"
    export function change(stringGoingToChanged: string, changed: string): void {

        basic.showString(stringGoingToChanged)
        basic.pause(1000)

        basic.showString(changed)
    }
}
