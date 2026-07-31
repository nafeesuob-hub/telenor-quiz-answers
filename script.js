const dateElement =
document.getElementById(
  "todayDate"
);


const answersList =
document.getElementById(
  "answersList"
);


const now =
new Date();


const dateOptions = {

  weekday:
  "long",

  year:
  "numeric",

  month:
  "long",

  day:
  "numeric"

};


dateElement.textContent =
now.toLocaleDateString(
  "en-PK",
  dateOptions
);


const year =
now.getFullYear();


const month =
String(
  now.getMonth() + 1
).padStart(
  2,
  "0"
);


const day =
String(
  now.getDate()
).padStart(
  2,
  "0"
);


const todayKey =
`${year}-${month}-${day}`;


fetch(
  "answers.json"
)

.then(
  response => {

    if (
      !response.ok
    ) {

      throw new Error(
        "Answers could not be loaded."
      );

    }

    return response.json();

  }
)


.then(
  data => {

    const answers =
    data[todayKey];


    if (
      !answers
    ) {

      answersList.innerHTML = `

        <div class="loading">

          Today's answers have not
          been added yet.

        </div>

      `;

      return;

    }


    answersList.innerHTML =
    "";


    answers.forEach(
      (
        answer,
        index
      ) => {

        const card =
        document.createElement(
          "div"
        );


        card.className =
        "answer-card";


        card.innerHTML = `

          <div>

            <div
              class="question-number"
            >

              Question
              ${index + 1}

            </div>

            <div
              class="answer"
            >

              ${answer}

            </div>

          </div>


          <button
            class="copy-button"
          >

            Copy

          </button>

        `;


        const button =
        card.querySelector(
          ".copy-button"
        );


        button.addEventListener(
          "click",
          () => {

            navigator
            .clipboard
            .writeText(
              answer
            );


            button.textContent =
            "Copied ✓";


            setTimeout(
              () => {

                button.textContent =
                "Copy";

              },
              1500
            );

          }
        );


        answersList
        .appendChild(
          card
        );

      }
    );

  }
)


.catch(
  error => {

    answersList.innerHTML = `

      <div class="loading">

        Unable to load answers.

      </div>

    `;

    console.error(
      error
    );

  }
);const dateElement =
document.getElementById(
  "todayDate"
);


const answersList =
document.getElementById(
  "answersList"
);


const now =
new Date();


const dateOptions = {

  weekday:
  "long",

  year:
  "numeric",

  month:
  "long",

  day:
  "numeric"

};


dateElement.textContent =
now.toLocaleDateString(
  "en-PK",
  dateOptions
);


const year =
now.getFullYear();


const month =
String(
  now.getMonth() + 1
).padStart(
  2,
  "0"
);


const day =
String(
  now.getDate()
).padStart(
  2,
  "0"
);


const todayKey =
`${year}-${month}-${day}`;


fetch(
  "answers.json"
)

.then(
  response => {

    if (
      !response.ok
    ) {

      throw new Error(
        "Answers could not be loaded."
      );

    }

    return response.json();

  }
)


.then(
  data => {

    const answers =
    data[todayKey];


    if (
      !answers
    ) {

      answersList.innerHTML = `

        <div class="loading">

          Today's answers have not
          been added yet.

        </div>

      `;

      return;

    }


    answersList.innerHTML =
    "";


    answers.forEach(
      (
        answer,
        index
      ) => {

        const card =
        document.createElement(
          "div"
        );


        card.className =
        "answer-card";


        card.innerHTML = `

          <div>

            <div
              class="question-number"
            >

              Question
              ${index + 1}

            </div>

            <div
              class="answer"
            >

              ${answer}

            </div>

          </div>


          <button
            class="copy-button"
          >

            Copy

          </button>

        `;


        const button =
        card.querySelector(
          ".copy-button"
        );


        button.addEventListener(
          "click",
          () => {

            navigator
            .clipboard
            .writeText(
              answer
            );


            button.textContent =
            "Copied ✓";


            setTimeout(
              () => {

                button.textContent =
                "Copy";

              },
              1500
            );

          }
        );


        answersList
        .appendChild(
          card
        );

      }
    );

  }
)


.catch(
  error => {

    answersList.innerHTML = `

      <div class="loading">

        Unable to load answers.

      </div>

    `;

    console.error(
      error
    );

  }
);
