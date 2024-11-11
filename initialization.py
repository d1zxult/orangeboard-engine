from flask import Flask, render_template
from flask_socketio import SocketIO
from threading import Thread

def create_app():
    app = Flask(__name__, template_folder='app/temp', static_folder='app/static')
    return app

app = create_app()
socketio = SocketIO(app)

@app.route('/')
def auth():
    return render_template('auth.html')

@app.route('/easter')
def easter():
    return render_template('easter.html')

@app.route('/explorer')
def explorer():
    return render_template('explorer.html')

@app.route('/extender')
def extender():
    return render_template('extender.html')

@app.route('/modules')
def modules():
    return render_template('modules.html')

@app.route('/overview')
def overview():
    return render_template('overview.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/settings')
def setting():
    return render_template('settings.html')

@app.route('/terminal')
def shell():
    return render_template('terminal.html')

if __name__ == "__main__":
    socketio.run(app, host='0.0.0.0', port=5000, debug=True)
