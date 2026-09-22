/* =========================
   OPEN INVITATION
========================= */

const openButton =
    document.getElementById(
        "openInvitation"
    );

const opening =
    document.getElementById(
        "opening"
    );

const invitation =
    document.getElementById(
        "invitation"
    );


document.body.classList.add(
    "locked"
);


openButton.addEventListener(
    "click",
    function () {

        opening.classList.add(
            "hide"
        );

        invitation.classList.add(
            "show"
        );

        document.body.classList.remove(
            "locked"
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);



/* =========================
   COUNTDOWN
========================= */

/*
   26 September 2026
   10.00 WITA
*/

const eventDate =
    new Date(
        "2026-09-26T10:00:00+08:00"
    ).getTime();


function countdown() {

    const now =
        new Date().getTime();


    const distance =
        eventDate - now;


    if (
        distance <= 0
    ) {

        document.getElementById(
            "days"
        ).innerHTML = "00";

        document.getElementById(
            "hours"
        ).innerHTML = "00";

        document.getElementById(
            "minutes"
        ).innerHTML = "00";

        document.getElementById(
            "seconds"
        ).innerHTML = "00";

        return;
    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (
                distance /
                (1000 * 60 * 60)
            ) % 24
        );


    const minutes =
        Math.floor(
            (
                distance /
                (1000 * 60)
            ) % 60
        );


    const seconds =
        Math.floor(
            (
                distance /
                1000
            ) % 60
        );


    document.getElementById(
        "days"
    ).innerHTML =
        String(days)
            .padStart(2, "0");


    document.getElementById(
        "hours"
    ).innerHTML =
        String(hours)
            .padStart(2, "0");


    document.getElementById(
        "minutes"
    ).innerHTML =
        String(minutes)
            .padStart(2, "0");


    document.getElementById(
        "seconds"
    ).innerHTML =
        String(seconds)
            .padStart(2, "0");

}


countdown();


setInterval(
    countdown,
    1000
);
