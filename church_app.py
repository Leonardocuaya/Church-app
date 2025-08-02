import streamlit as st
import random

class ChurchApp:
    def __init__(self):
        self.members = {}
        self.events = {}
        self.prayer_requests = []
        self.cleaning_schedule = {}
        self.musicians_schedule = {}
        self.playlists = {}
        self.notifications = []

    def add_member(self, name, birthday):
        self.members[name] = {'birthday': birthday}

    def add_event(self, event_name, date, playlist=None):
        self.events[event_name] = {'date': date, 'playlist': playlist}

    def add_prayer_request(self, request):
        self.prayer_requests.append(request)

    def assign_prayer(self):
        if self.prayer_requests and self.members:
            request = self.prayer_requests.pop(0)
            member = random.choice(list(self.members.keys()))
            return f"{member} will pray for: {request}"
        return "No prayer requests or members."

    def schedule_cleaning(self):
        if self.members:
            family = random.choice(list(self.members.keys()))
            self.cleaning_schedule[family] = 'Next cleaning duty'
            return f"{family} assigned to next cleaning."
        return "No members."

    def schedule_musicians(self, date, musicians):
        self.musicians_schedule[date] = musicians

    def add_notification(self, message):
        self.notifications.append(message)

    def send_notifications(self):
        pass

app = ChurchApp()

st.title("📱 Church App")

st.header("👤 Add Member")
name = st.text_input("Member Name")
birthday = st.date_input("Birthday")
if st.button("Add Member"):
    app.add_member(name, str(birthday))
    st.success(f"{name} added!")

st.header("🙏 Prayer Requests")
prayer = st.text_input("New prayer request")
if st.button("Add Prayer Request"):
    app.add_prayer_request(prayer)
    st.success("Prayer request added.")

if st.button("Assign Prayer"):
    result = app.assign_prayer()
    st.info(result)

st.header("🧹 Cleaning Duty")
if st.button("Assign Cleaning"):
    msg = app.schedule_cleaning()
    st.info(msg)

st.header("🎵 Schedule Musicians")
date = st.date_input("Event Date")
musicians = st.text_input("Enter musicians (comma-separated)")
if st.button("Schedule Musicians"):
    app.schedule_musicians(str(date), [m.strip() for m in musicians.split(',')])
    st.success("Musicians scheduled.")

st.header("🔔 Notifications")
notif = st.text_input("Write a notification")
if st.button("Add Notification"):
    app.add_notification(notif)
    st.success("Notification added.")
