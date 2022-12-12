const symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("")
export const tokenGenarator = () => {

    return symbols.sort((a, b) => 0.5 - Math.random()).join("")

}