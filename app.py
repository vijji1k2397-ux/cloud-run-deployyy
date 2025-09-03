from flask import Flask

app = Flask(_name_)

@app.route("/")
def hello():
    return "cloud run deploy using github actions!"

if _name_ == "_main_":
    app.run(host="0.0.0.0", port=8080)
