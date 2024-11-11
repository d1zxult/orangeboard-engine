from flask import Flask
# from interface_bridge import InterfaceBridge
# from module_handler import ModuleHandler
# from platform_inspector import PlatformInspector
# from system_interactor import SystemInteractor

def create_app():
    app = Flask(__name__, template_folder='app/temp', static_folder='app/static')

#   interface_bridge = InterfaceBridge() # Создание экземпляра InterfaceBridge

#   module_handler = ModuleHandler() # Создание экземпляра ModuleHandler

#   platform_inspector = PlatformInspector() # Создание экземпляра PlatformInspector

#   system_interactor = SystemInteractor() # Создание экземпляра SystemInteractor

    return app
