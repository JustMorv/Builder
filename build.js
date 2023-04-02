class Computer{
	constructor(){
		this.HDMI = false
		this.bluetooth = false
		this.OS = false
	}
}

class ComputerBuilder{
	// в контрукторе создаём ссылку на наш инстанс/объект
	constructor(){
		this.Computer = new Computer()
	}
	// добавляем HDMI
	addHDMI(HDMI){
		this.Computer.HDMI = HDMI
		return this
	}
	// добавляем bluetooth
	addABluetooth(bluetooth){
		this.Computer.bluetooth = bluetooth
		return this
	}
	// добавляем OS
	addOS(OS){
		this.Computer.OS = OS
		return this
	}
	// мы можем добовлять свои свойства/ если надо.
	addPrinter(printer){
		this.Computer.printer = printer
		return this
	}
	// получает
	getBuilder(){
		return this.Computer
	}
}

const myComputer = new ComputerBuilder()
						.addHDMI(true)
						.addABluetooth(true)
						.addOS("Micracoft Windows 10")
						.addPrinter("toshiba")
						.getBuilder();

console.log(myComputer)