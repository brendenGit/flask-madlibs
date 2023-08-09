from flask import Flask, render_template, request, redirect, session
from stories import *

app = Flask(__name__)

@app.route('/')
def madlibs():
    return render_template("home.html")


@app.route('/answers')
def answers():
    return render_template("answers.html")


@app.route('/story')
def story():
    final_story = session.get('final_story')
    return render_template("story.html", final_story = final_story)


@app.route('/story/new', methods=['POST'])
def add_story():
    story_content = request.json.get('content')
    story = Story(
        ["place", "noun", "verb", "adjective", "plural_noun"],
        story_content
    )
    answers = request.args
    final_story = story.generate(answers)
    session['final_story'] = final_story
    return redirect("/story")