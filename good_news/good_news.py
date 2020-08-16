import functools
import logging
from flask import Flask, Blueprint, render_template
from good_news.goodnews import *
from apscheduler.schedulers.background import BackgroundScheduler


update = update_headlines
scheduler = BackgroundScheduler()
scheduler.add_job(func=update, trigger='cron', hour='8,20')
scheduler.start()

good_news_bp = Blueprint('good_news_bp', __name__,
    template_folder='templates',
    static_folder='static', static_url_path='good_news/static')



@good_news_bp.route('/')
def goodnews():
        top_positive_news = get_top_news(30)
        vertical = len(top_positive_news)//2
        return render_template('goodnews.html', data=top_positive_news, day = today_date(), vertical=vertical, source_names = source_names, last_update = last_update_news)

