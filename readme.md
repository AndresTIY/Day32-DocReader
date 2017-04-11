## Confirming Actions with React
### Explorer Mode
- Create a document reader app, that allows users to read a document and mark that document as read
- Use checkbox to allow a user to mark a doc as read
- When user checks the checkbox, it should become checked AND be prompted to confirm whether they truly read the doc (perhaps with a modal)
- If confirmed, box should stayed CHECKED and become DISABLED
- If they cancel, box should go back to being unchecked
- App should use multiple react components
- Use redux architecture, as in Reducer and Actions

### Checkboxes!
- [x] Create views for document
- [x] Create a "Mark as Read" checkbox
- [ ] Checkbox Actions when checked:
  - [ ] Prompt for confirm
    - [ ] Two Options, Cancel and confirm
      - [ ] Cancel closes prompt window, checkbox is unchecked
      - [ ] Confirm closes AND disables checkbox
- [ ] Use multiple react components
- [ ] Use Reducer and Actions


- Action Types?
- only one view
- state, what should we have? a boolean!
if checkbox clicked - > open prompt window
when cancel is clicked, close prompt window, uncheck checkbox
when confirm is clicked, close prompt window, disable checkbox

Action: click checkbox, cancel action, confirm action
Component: view for document, view for prompt window
Reducer: switch statement..
