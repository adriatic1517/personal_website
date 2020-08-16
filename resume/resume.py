from flask import Blueprint, render_template

resume_bp = Blueprint('resume_bp', __name__,
    template_folder='templates',
    static_folder='static', static_url_path='resume/static')


@resume_bp.route('/')
def home():
	return render_template('resume-format-home.html')

