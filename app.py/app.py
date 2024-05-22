from flask import Flask, request, jsonify, send_file
from transformers import pipeline
from gtts import gTTS
import os

app = Flask(__name__)
nlp_model = pipeline('sentiment-analysis')

@app.route('/analyze', methods=['POST'])
def analyze_text():
    data = request.json
    text = data['text']
    results = nlp_model(text)
    return jsonify(results)

@app.route('/tts', methods=['POST'])
def text_to_speech():
    data = request.json
    text = data['text']
    tts = gTTS(text, lang='es')
    tts.save("output.mp3")
    return send_file("output.mp3", mimetype="audio/mpeg")

if __name__ == '__main__':
    app.run(port=5000)
