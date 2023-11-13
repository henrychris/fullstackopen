sequenceDiagram
    participant browser
    participant server

    note right of browser: browser adds the new note to an array
    note right of browser: browser calls the redrawNotes() function to render all notes in the array

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTTP 201: {"message":"note created"}
    note left of server: the new note was sent to the server.
    deactivate server