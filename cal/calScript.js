let memory = 0;

// Function to display value
        function dis(val) {
            document.getElementById("result").value += val;
        }

// Function to solve all operations
        function solve() {
            try {
                let x = document.getElementById("result").value;
                let y = eval(x);
                document.getElementById("result").value = y;
            } catch (e) {
                document.getElementById("result").value = "Error";
            }
        }

// Function to clear the screen
        function clr() {
            document.getElementById("result").value = "";
        }

// Function to clear the last element
        function backspace() {
            let currentValue = document.getElementById("result").value;
            document.getElementById("result").value = currentValue.slice(0, -1);
        }

//Function to perform square root
        function sqrt() {
            try {
                let x = document.getElementById("result").value;
                let y = Math.sqrt(eval(x));
                document.getElementById("result").value = y;
            } catch (e) {
                document.getElementById("result").value = "Error";
            }
        }

//Function to perform percentage operation
        function percent() {
            try {
                let x = document.getElementById("result").value;
                let y = eval(x) / 100;
                document.getElementById("result").value = y;
            } catch (e) {
                document.getElementById("result").value = "Error";
            }
        }

//Function to clear the memory.
        function memoryClear() {
            memory = 0;
        }

        function memoryRecall() {
            document.getElementById("result").value = memory;
        }

//Function to add an element to the memory
        function memoryAdd() {
            try {
                let x = document.getElementById("result").value;
                memory += eval(x);
            } catch (e) {
                document.getElementById("result").value = "Error";
            }
        }

//Function to remove an element to the memory
        function memorySubtract() {
            try {
                let x = document.getElementById("result").value;
                memory -= eval(x);
            } catch (e) {
                document.getElementById("result").value = "Error";
            }
        }

// Function to handle keyboard input
        document.addEventListener('keydown', function (event) {
            const key = event.key;
            if (key >= '0' && key <= '9') {
                dis(key);
            } else if (key === '+' || key === '-' || key === '*' || key === '/') {
                dis(key);
            } else if (key === 'Enter') {
                event.preventDefault(); // Prevent form submission on Enter key press
                solve();
            } else if (key === 'Backspace') {
                backspace();
            } else if (key === 'Escape') {
                clr();
            } else if (key === '.') {
                dis(key);
            } else if (key === 's' || key === 'S') {
                sqrt();
            } else if (key === '%') {
                percent();
            }
        });
