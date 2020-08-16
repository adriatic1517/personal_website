from flask import Flask
from pashto import pashto_bp
from good_news import good_news_bp
from resume import resume_bp

app = Flask(__name__)

app.register_blueprint(pashto_bp, url_prefix='/pashto')
app.register_blueprint(good_news_bp, url_prefix='/good_news')
app.register_blueprint(resume_bp, url_prefix='/home')


