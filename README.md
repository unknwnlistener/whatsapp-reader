# WhatsApp Chat Reader

This app is to allow for a more familiar UI to read exported WhatsApp chat conversations. Due to privacy reasons none of the uploaded text files are saved. They are only accessible for the duration of the session and will have to be reuploaded for a new session.

### Usage

1. In the WhatsApp mobile app, go to the conversation you want to export, select export chat from the top menu
2. A text file will be exported to your local device.
3. Upload the text file at the start of the web app and Click Submit
4. The chat conversation should show up in a conversation format.

You can view the application at [bee-wa-reader.netlify.app](https://bee-wa-reader.netlify.app/)

### Feature Ideas

- [ ] Filter out meta messages - (text === undefined), (<Media omitted>)
- [ ] Colour scheme/palette selector
- [x] Dynamic parsing of text file for new messages on scroll (~~lazy load~~)
  - [x] Lazy loading is bad. What you want is windowing (like Twitter)
- [ ] separate "Settings" section for

  - [ ] setting color values
  - [ ] Font-size adjustments
  - [ ] Background image selection?
  - [ ] Sliced number of messages to show

- [ ] Loader while file is being parsed
- [ ] Switching view of sender and receivers
- [ ] Star/Bookmark feature for messages
- [x] Load in whatsapp chats through file uploads
  - [ ] Default sample chat conversation
- [ ] Map the people in conversation to different variables -- Future reading for Group Chats
- [ ] Sticky the date as scroll happens
- [ ] Set option to exchange the chat as well as the names from left to right
