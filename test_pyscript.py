from pyscript import Element
import datetime

def current_time():
    now = datetime.datetime.now()

    # Get paragraph element by id
    paragraph = Element("current-time")

    # Add current time to the paragraph element
    paragraph.write(now.strftime("%Y-%m-%d %H:%M:%S"))