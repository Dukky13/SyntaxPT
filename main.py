import eel

eel.init('Gui')

@eel.expose
def App():
    print('aplication running')

App()

eel.start('index.html',size=(500,600))