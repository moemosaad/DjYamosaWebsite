from flask import Flask, render_template

app = Flask(__name__, static_folder="../public/dist",
            template_folder="../public")


@app.route("/", methods=["GET"])
def get_landing():
    # return "hello"
    return render_template("index.html")


@app.route("/inquiry", methods=["POST"])
def inquiry():
    return "ok"


# if __name__ == "__main__":
# app.run()
