#!/bin/bash




while true; do
	echo "------------------------"
	echo "Personal Organizer Menu"
	echo "1. Create a new subject/project"
	echo "2. Add a note"
	echo "3. View notes"
	echo "4. Search notes"
	echo "5. Archive notes"
	echo "6. Delete notes or subject/project"
	echo "7. Exit"
	echo "------------------------"
	echo "Choose an Option:"
	read option


	case $option in
		1)
			# Create subject code here
			echo "Enter the name of  the new subject or project:"
			read subject
			mkdir -p "$HOME/personal_organizer/$subject"
			echo "Folder for $subject created."
			;;
		2)
			# Add note code here
			echo "Please select a subject/project:"
			read subject
			if [ -d "$HOME/personal_organizer/$subject" ]; then
				echo "Enter your note: "
				read note
				echo "$note" >> "$HOME/personal_organizer/$subject/notes.txt"
				echo "Note added to $subject."
			else
				echo "Subject not found."
			fi
			;;
		3)
			# View notes code here
			echo "Please select a subject/project:"
 			read subject
    			if [ -f "$HOME/personal_organizer/$subject/notes.txt" ]; then
        			cat "$HOME/personal_organizer/$subject/notes.txt"
    			else
        			echo "No notes found for $subject."
    			fi

			;;
		4)
			# Search note codes here
			echo "Please select a subject/project:"
			read subject
    			if [ -f "$HOME/personal_organizer/$subject/notes.txt" ]; then
        			echo "Enter the keyword to search:"
        			read keyword
        			grep "$keyword" "$HOME/personal_organizer/$subject/notes.txt"
    			else
        			echo "No notes found for $subject."
    			fi
			;;
		5)
			# Archive note codes here
			echo "Please select a subject/project:"
			read subject
			if [ -f "$HOME/personal_organizer/$subject/notes.txt" ]; then
        			tar -czvf "$HOME/personal_organizer/$subject/notes_archive.tar.gz" "$HOME/personal_organizer/$subject/notes.txt"
        			rm "$HOME/personal_organizer/$subject/notes.txt"
        			echo "Notes for $subject archived and removed."
    			else
        			echo "No notes to archive for $subject."
    			fi
			;;
		6)
			# Delete notes code here
			echo "Would you like to delete a note or a subject/project:"
			read keyword
			if [ -f "$HOME/personal_organizer/$keyword/t" ]; then
				rm "$HOME/personal_organizer/$keyword/t"
			elif
				echo "Please select a note:"
			read subject
				echo "o"
			else 
				echo "o"
			;;
		7)
			echo "Exiting..."
			exit 0
			;;
		*)
			echo "Invalid option, please try again."
			;;
		esac
	done

