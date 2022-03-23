from flask import Flask, render_template
import random
 
app = Flask(__name__)
 
@app.route("/")
def index():
    lotto_li = list(range(1,46))
    lotto = sorted(random.sample(lotto_li, 6))
    return render_template("index.html", variable=lotto)
 
if __name__ == "__main__":
    app.run()