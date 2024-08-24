
// Business Logic for each account
function BankAccount() {
    this.Accounts = {};
    this.currentId = 0;
}
BankAccount.prototype.AcctId = function () {
    this.currentId++;
    return this.currentId;
}
BankAccount.prototype.AddAcount = function (account) {
    account.id = this.AcctId();
    this.Accounts[account.id] = account;
}
BankAccount.prototype.findAccount = function (id) {
    if (this.Accounts[id] !== undefined) {
        return this.Accounts[id];
    }
    return false;
}

// Business Logic for each account
function Account(firstname, lastname, phonenumber, emailaddress, country, password, balance, point, accountnumber) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.phoneNumber = phonenumber;
    this.emailAddress = emailaddress;
    this.country = country;
    this.password = password;
    this.balance = balance;
    this.point = point
    this.accountnumber = accountnumber
    this.transactions = {}
    this.transactionId = 0
}

function generateAccountNumber() {
    return Math.floor(1000000000 + Math.random() * 9000000000)
}
Account.prototype.fullName = function () {
    return this.firstName + ' ' + this.lastName;
};
Account.prototype.addTransaction = function (name, amount, event, receiverAccount) {
    this.transactionId++; // Increment the transaction ID

    const transaction = {
        id: this.transactionId,
        name: name,
        amount: amount,
        event: event,
        receiverAccount: receiverAccount,
    };

    // Store the transaction using the transactionId as the key
    this.transactions[this.transactionId] = transaction;
};

// Account.prototype.addTransaction = function (transaction) {
//     this.transaction = transaction
// };

// Account.prototype.findtransaction = function (id) {
//     if (this.transactions[id] !== undefined) {
//         return this.transactions[id];
//     }
//     return false;
// }
// function Transaction(name, amount, event, receiverAccount) {
//     this.name = name;
//     this.amount = amount;
//     this.event = event;
//     this.receiverAccount = receiverAccount;
// }
function loading() {
    let alert = document.getElementById("load");
    let page = document.getElementById("user");
    let logpage = document.getElementById("login");
    page.style.display = "none";
    alert.style.display = "block";
    logpage.style.display = "block";
    setTimeout(function () {
        $("#user").slideDown()
        $('.password').val("")
        $('.emaillogin').val("")
        $(".did").text("No ID yet");
        $(".acctid").val("");
        alert.style.display = "none";
        logpage.style.display = "none";
    }, 4000);
}
function PromtTimer() {
    let alert = document.getElementById("warning");
    alert.style.display = "block"
    setTimeout(function () {
        alert.style.display = "none";
    }, 2000);
}
function warningTimer() {
    let alert = document.getElementById("warning2");
    alert.style.display = "block"
    setTimeout(function () {
        alert.style.display = "none";
    }, 2000);
}
function sentTimer() {
    let alert = document.getElementById("sent");
    alert.style.display = "block"
    setTimeout(function () {
        alert.style.display = "none";
    }, 2000);
}
function showtrans(transaction) {
    const account = bankAccount.findAccount(this.id);
    let trans = account.findtransaction(transaction)
    let contactsList = $(".alltrs");
    contactsList.append(`
    <div class="record flex font4">
        <div class="recimg">
            <img src="img/money-bill-solid.svg" alt="">
        </div>
        <div class="rectext flex">
            <p class="reason">${trans.name}</p>
            <p class="show">${trans.amount.toFixed(2)}</p>
            <p class="green show">${trans.event}</p>
        </div>
    </div>
`);
}
function showAccount(accountId) {
    const account = bankAccount.findAccount(accountId);
    sentTimer()
    let page = $(".userbdy");
    page.empty();
    page.append(`
            <div class="userhd  bgcolor2 flex font4" id="${account.id}">
                <div class="userpro flex">
                    <div class="bgcolor2 ${account.firstName} imagepro userprofile">
                        <img src="img/user-regular.svg" alt="">
                    </div>
                      <div class="profile">
                            <p>User Name: <span class="userfullnm">${account.fullName()}</span></p>
                            <p>Phone no.: <span class="phnm">${account.phoneNumber}</span></p>
                            <p>Email: <span class="emailus">${account.emailAddress}</span></p>
                            <p>Country: <span class="cutry">${account.country}</span></p>
                            <p>Password: <span class="pss">${account.password}</span></p>
                             <p>Account Number: <span class="pss">${account.accountnumber}</span></p>
                            <p>Account ID: <span class="acctcid">${account.id}</span></p>
                        </div>
                    <p>Hi <span class="username">${account.firstName}</span></p>
                     <p class="lit">Account ID : <span class="acctcid">${account.id}</span>
                </div>
                <div class="userpro flex pro">
                    <p class="flex">Point <span id="${account.id}" class="point">${account.point}</span></p>
                    <div class="imagelg">
                        <img class="def" id="${account.id}"  src="img/ellipsis-vertical-solid.svg" alt="">
                    </div>
                    <div class="boloc back">
                        <p class="red blok" id="${account.id}">Block</p>
                        <p class="red unblok" id="${account.id}">Unblock</p>
                        <p class="red logout def">Log Out</p>
                    </div>
                </div>
            </div>
            <div class="bginfo font4">
                <div class="info colortext2 flex2">
                    <p>Balance</p>
                    <div class="amount flex">
                        <div class="imgamount">
                            <img src="img/naira-sign-solid.svg" alt="">
                        </div>
                        <p class="currentamount">${account.balance}</p>
                        <p class="star">**********</p>
                        <div id="${account.id}" class="imghide imagelg eye">
                            <img  src="img/eye-regular (1).svg" alt="">
                        </div>
                    </div>
                    <p>Account Number</p>
                    <div class="acctnumdiv flex">
                        <p id="${account.id}" class="acctnum">${account.accountnumber}</p>
                        <div id="${account.id}" class="imghide imagelg copy">
                            <img src="img/copy-regular (1).svg" alt="">
                        </div>
                    </div>
                    <div class="allbtn flex">
                        <button id="${account.id}" class="buttin fund def block">Fund account</button>
                         <button id="${account.id}" class="buttin withdraw def block">WithDraw</button>
                        <button id="${account.id}" class="buttin tranhis def">Transaction History</button>
                    </div>
                </div>
            </div>
            <div class="ttr back">
                <div class="cancel">
                    <img src="img/xmark-solid.svg" alt="">
                </div>
                <div class="transactions flex2">
                    <p class="font3 colortext2 pfirst">Transaction History</p>
                    <div class="alltrs">
                       
                    </div>
                </div>
            </div>
            <div class="hide1 back">
                <div class="input flex2 creditfund">
                    <div class="cancel">
                        <img src="img/xmark-solid.svg" alt="">
                    </div>
                    <input placeholder="" readonly id="${account.id}" class="usernameinput" type="text" name="">
                    <input placeholder="" id="${account.id}" readonly class="acctnuminput" type="text">
                    <input placeholder="Amount" id="${account.id}" class="credit newin" type="text">
                    <button id="${account.id}" class="buttins buttin newin moneybut">Credit</button>
                </div>
            </div>
            <div class="hide4 back">
                <div class="input flex2 with">
                    <div class="cancel">
                        <img src="img/xmark-solid.svg" alt="">
                    </div>
                    <input placeholder="" readonly id="${account.id}" class="usernameinput" type="text" name="">
                    <input placeholder="" id="${account.id}" readonly class="acctnuminput" type="text">
                    <input placeholder="Amount" id="${account.id}" class="debit newin" type="text">
                    <button id="${account.id}" class="buttins buttin moneybut">withdraw</button>
                </div>
            </div>
            <div class="pay flex font4">
                <div class="contpay">
                    <div id="${account.id}" class="payment def ment block"><img src="img/sack-dollar-solid.svg" alt=""></div>
                    <p>Send Money</p>
                </div>
                <Marquee class="font3">Alert By Martic</Marquee>
                <div class="contpay">
                    <div id="${account.id}" class="payment ment2 def block"><img src="img/money-bill-solid.svg" alt=""></div>
                    <p>Buy Airtime</p>
                </div>
            </div>
            <div class="hide2 back">
                <div class="input flex2 send">
                    <div class="cancel">
                        <img src="img/xmark-solid.svg" alt="">
                    </div>
                     <input placeholder="Receviers name"  id="${account.id}"  class="sendname" type="text" name="">
                    <input id="${account.id}" placeholder="Receviers Account Number" class="acctnumrev" type="number">
                     <input id="${account.id}" placeholder="Amount" class="funds" type="text" name="">
                    <button id="${account.id}" class="buttins buttin moneybut">Send</button>
                </div>
            </div>
            <div class="hide3 back">
                <div class="input flex2 airtime">
                    <div class="cancel">
                        <img src="img/xmark-solid.svg" alt="">
                    </div>
                    <input id="${account.id}" placeholder="Network" class="network" type="text" name="">
                    <input id="${account.id}" placeholder="Airtime/Data" class="card" type="text" name="">
                     <input placeholder="Recivers Number" id="${account.id}" class="cardphonenm" type="number" name="">
                    <input id="${account.id}" placeholder="Amount" class="datamount" type="text">
                    <button id="${account.id}" class="buttins buttin moneybut">Buy</button>
                </div>
            </div>
            
        `);
}
function attachAccountListeners() {
    function fundAccount(accountId) {
        const account = bankAccount.findAccount(accountId);
        let currentBalance = parseFloat(account.balance);
        let inputedfund = parseFloat($(`#${accountId}.credit`).val());
        let limit = 1500000
        if (currentBalance + inputedfund > limit) {
            PromtTimer()
            $(".warn").text("Cannot Add funds, Income limit exceeded");
            return currentBalance.toFixed(2);
        }

        if (isNaN(inputedfund) || inputedfund <= 0) {
            PromtTimer()
            $(".warn").text("Invalid Fund Amount");
            return currentBalance.toFixed(2);
        }
        let newBalance = (currentBalance + inputedfund).toFixed(2);
        account.balance = newBalance;
        $(".point").text(Accountpoint(accountId))
        account.addTransaction(
            account.firstName,
            inputedfund,
            "Credit",
            account.accountnumber
        );

        // Update the UI to reflect the new transaction
        let transaction = account.transactions[account.transactionId];
        let contactsList = $(".alltrs");
        contactsList.prepend(`
            <div class="record flex font4">
                <div class="recimg">
                    <img src="img/money-bill-solid.svg" alt="">
                </div>
                <div class="rectext flex">
                    <p class="reason">${transaction.name}</p>
                    <p class="show">${transaction.amount.toFixed(2)}</p>
                    <p class="green show">${transaction.event}</p>
                </div>
            </div>
        `);
        sentTimer()
        return newBalance;
    }
    function WithDrawFunds(accountId) {
        const account = bankAccount.findAccount(accountId);
        let currentBalance = parseFloat(account.balance);
        let inputedfund = parseFloat($(`#${accountId}.debit`).val());

        if (currentBalance < inputedfund) {
            PromtTimer()
            $(".warn").text("Cannot withdraw funds, Income limit exceeded");
            return currentBalance.toFixed(2);
        }

        if (isNaN(inputedfund) || inputedfund <= 0) {
            PromtTimer()
            $(".warn").text("Invalid Fund Amount");
            return currentBalance.toFixed(2);
        }
        $('.debit').val("");
        let newBalance = (currentBalance - inputedfund).toFixed(2);
        account.balance = newBalance;
        $(".point").text(Accountpoint(accountId))
        // Create a transaction
        account.addTransaction(
            account.firstName,
            inputedfund,
           "Debit" ,
            account.accountnumber
        );

        // Update the UI to reflect the new transaction
        let transaction = account.transactions[account.transactionId];
        let contactsList = $(".alltrs");
        contactsList.prepend(`
                <div class="record flex font4">
                    <div class="recimg">
                        <img src="img/money-bill-solid.svg" alt="">
                    </div>
                    <div class="rectext flex">
                        <p class="reason">${transaction.name}</p>
                        <p class="show">${transaction.amount.toFixed(2)}</p>
                        <p class="red show">${transaction.event}</p>
                    </div>
                </div>
            `);

        sentTimer()
        return newBalance;
    }
    function sendFunds(accountId) {

        const account = bankAccount.findAccount(accountId);
        let currentBalance = parseFloat(account.balance);
        let inputedfund = parseFloat($(`#${accountId}.funds`).val());
        let nameSent = $(`#${accountId}.sendname`).val().trim()
        let nameSentnum = $(`#${accountId}.acctnumrev`).val().trim()

        if (inputedfund !== "" && nameSent !== "" && nameSentnum.length === 10) {
            if (currentBalance < inputedfund) {
                PromtTimer()
                $(".warn").text("Cannot send funds, Income limit exceeded");
                return currentBalance.toFixed(2);
            }

            if (isNaN(inputedfund) || inputedfund <= 0) {
                PromtTimer()
                $(".warn").text("Invalid Fund Amount");
                return currentBalance.toFixed(2);
            }
            $('.funds').val("");
            let newBalance = (currentBalance - inputedfund).toFixed(2);
            account.balance = newBalance;
            $(".point").text(Accountpoint(accountId))
            let reson = nameSent + ' | ' + nameSentnum
            account.addTransaction(
                reson,
                inputedfund,
                "Debit",
                account.accountnumber
            );

            // Update the UI to reflect the new transaction
            let transaction = account.transactions[account.transactionId];
            let contactsList = $(".alltrs");
            contactsList.prepend(`
                <div class="record flex font4">
                    <div class="recimg">
                        <img src="img/money-bill-solid.svg" alt="">
                    </div>
                    <div class="rectext flex">
                        <p class="reason">${transaction.name}</p>
                        <p class="show">${transaction.amount.toFixed(2)}</p>
                        <p class="red show">${transaction.event}</p>
                    </div>
                </div>
            `);
            sentTimer()
            return newBalance;
        }
        $(".warn").text("Pls check your input");
        PromtTimer()
    }
    function Recharge(accountId) {

        const account = bankAccount.findAccount(accountId);
        let currentBalance = parseFloat(account.balance);
        let inputedfund = parseFloat($(`#${accountId}.datamount`).val());
        let valueSent = $(`#${accountId}.card`).val().trim()
        let valuenet = $(`#${accountId}.network`).val().trim()
        let valuenum = $(`#${accountId}.cardphonenm`).val().trim()

        if (valueSent !== "" && valueSent === "airtime".toLowerCase() || valueSent === "data".toLowerCase() && valuenet !== "" && valuenet === "airtel".toLowerCase() || valueSent === "mtn".toLowerCase() || valueSent === "glo".toLowerCase() || valueSent === "9mobile".toLowerCase() && valuenum.length === 11) {
            if (currentBalance < inputedfund) {
                PromtTimer()
                $(".warn").text("Cannot buy , Income limit exceeded");
                return currentBalance.toFixed(2);
            }

            if (isNaN(inputedfund) || inputedfund <= 0) {
                PromtTimer()
                $(".warn").text("Invalid Fund Amount");
                return currentBalance.toFixed(2);
            }
            $('.datammount').val("");
            let newBalance = (currentBalance - inputedfund).toFixed(2);
            account.balance = newBalance;
            $(".point").text(Accountpoint(accountId))
            let reson = valuenet + " | " + valueSent
            account.addTransaction(
                reson,
                inputedfund,
                "Debit",
                account.accountnumber
            );

            // Update the UI to reflect the new transaction
            let transaction = account.transactions[account.transactionId];
            let contactsList = $(".alltrs");
            contactsList.prepend(`
                <div class="record flex font4">
                    <div class="recimg">
                        <img src="img/money-bill-solid.svg" alt="">
                    </div>
                    <div class="rectext flex">
                        <p class="reason">${transaction.name}</p>
                        <p class="show">${transaction.amount.toFixed(2)}</p>
                        <p class="red show">${transaction.event}</p>
                    </div>
                </div>
            `);

            sentTimer()
            return newBalance;
        }
        $(".warn").text("Pls check your input");
        PromtTimer()
    }
    function Accountpoint(accountId) {
        const account = bankAccount.findAccount(accountId);

        // if (!account) {
        //     console.error("Account not found");
        //     return;
        // }
        let addedPoint = 2
        let pointLimit = 10
        let currentPoint = parseInt(account.point);
       let rule = currentPoint > pointLimit

       let newPoint = currentPoint + addedPoint;
     
        if (rule) {

            newPoint = 0;
            account.point = newPoint;
        } else {
            account.point = newPoint;
        }
        return account.point;
    }
    $(".userbdy").on('click', '.moneybut', function () {
        let control = $(".moneybut").index(this);
        let accountId = $(this).attr('id');
        switch (control) {
            case 0:
                let updatedBalance = fundAccount(accountId);
                if (updatedBalance !== undefined) {
                    $(".currentamount").text(updatedBalance);
                    $(".credit").val("");
                }
                break;
            case 1:
                let updatedBalanceout = WithDrawFunds(accountId);
                if (updatedBalanceout !== undefined) {
                    $(".currentamount").text(updatedBalanceout);
                    $(".debit").val("");
                }
                break;
            case 2:
                let updatedBalanceOutSend = sendFunds(accountId);
                if (updatedBalanceOutSend !== undefined) {
                    $(".currentamount").text(updatedBalanceOutSend);
                    $(".funds").val("");
                }
                break;
            case 3:
                let updatedBalanceCard = Recharge(accountId);
                if (updatedBalanceCard !== undefined) {
                    $(".currentamount").text(updatedBalanceCard);
                    $(".datamount").val("");
                }
                break;
            default:

        }
    })

    $(".userbdy").on("click", ".copy", function () {
        const account = bankAccount.findAccount(this.id);
        let ToCopy = account.accountnumber
        let textToCopy = ToCopy;
        let tempTextarea = $("<textarea>");
        tempTextarea.val(textToCopy);
        $("body").append(tempTextarea);
        tempTextarea.select();
        document.execCommand("copy");
        $(tempTextarea).remove();

    });

    $(".userbdy").on('click', '.userprofile', function () {
        $(".profile").slideToggle()
    })
    $(".userbdy").on('click', '.eye', function () {
        $(".currentamount").slideToggle()
        $(".star").slideToggle()
    })
    $(".userbdy").on('click', '.def', function () {
        let control = $(".def").index(this);
        let accountnom = $(this).closest(".bginfo").find(".acctnum").text();
        switch (control) {
            case 0:
                $(".boloc").slideToggle();
                $(".ttr").slideUp();
                $(".hide1").slideUp();
                $(".hide3").slideUp();
                $(".hide2").slideUp();
                $(".hide4").slideUp();
                $("marquee").show();
                break;
            case 1:
                $(".boloc").slideUp();
                $(".login-page").show()
                $(".userinterface").slideUp();
                $(".login").show()
                $(".signup").hide()
                $(".ttr").slideUp();
                $(".hide1").slideUp();
                $(".hide3").slideUp();
                $(".hide2").slideUp();
                $(".hide4").slideUp();
                $("marquee").show();
                break;
            case 2:
                $(".boloc").slideUp();
                $(".hide4").slideUp();
                $(".ttr").slideUp();
                $(".hide1").fadeIn();
                $(".hide3").slideUp();
                $(".hide2").slideUp();
                $("marquee").show();
                $(".acctnuminput").val(accountnom);
                break;
            case 3:
                $(".boloc").slideUp();
                $(".hide1").slideUp();
                $(".hide2").slideUp();
                $(".hide3").slideUp();
                $(".hide4").fadeIn();
                $("marquee").hide();
                $(".ttr").slideUp();
                $(".acctnuminput").val(accountnom);
                break;
            case 4:
                $(".boloc").slideUp();
                $(".ttr").fadeIn();
                $(".hide4").slideUp();
                $(".hide1").slideUp();
                $(".hide3").slideUp();
                $(".hide2").slideUp();
                $("marquee").show();
                break;
            case 5:
                $(".boloc").slideUp();
                $(".ttr").slideUp();
                $(".hide1").slideUp();
                $(".hide3").slideUp();
                $(".hide2").fadeIn();
                $(".hide4").slideUp();
                $("marquee").show();
                break;
            default:
                $(".boloc").slideUp();
                $(".hide3").fadeIn();
                $(".hide2").slideUp();
                $(".hide1").slideUp();
                $(".ttr").slideUp();
                $(".hide4").slideUp();
                $("marquee").show();
        }
    })
    function block() {
        $(".block").addClass("blocked").on('click.blocked', function (event) {
            event.preventDefault();
            event.stopImmediatePropagation()
        })
        $(".blok").hide();
        $(".unblok").fadeIn();
    }
    function unBlock() {
        $(".block").removeClass("blocked").off('click.blocked')
        $(".blok").fadeIn();
        $(".unblok").hide();
    }
    $(".userbdy").on('click', '.blok', function () {
        block()
        $(".credit").val("");
        $(".debit").val("");
        $(".funds").val("");
        $(".datamount").val("");
    })
    $(".userbdy").on('click', '.unblok', function () {
        unBlock()
    })
    $(".userbdy").on('click', '.cancel', function () {
        $(".back").slideUp()
        $(".credit").val("");
        $(".debit").val("");
        $(".funds").val("");
        $(".datamount").val("");
        $("marquee").show();
    })

    $(".userbdy").on('click', 'button', function () {
        const account = bankAccount.findAccount(this.id);
        let accountname = $(`#${account.id}`).find('.username').text();
        let inputedfund = parseFloat($(`#${account.id}.credit`).val());


        $(".usernameinput").val(accountname);

        account.addTransaction(
            reson,
            inputedfund,
            "Credit",
            account.accountnumber
        );

        let transaction = new Transaction(
            account.firstName,
            inputedfund,
            "Credit",
            account.accountnumber
        );
        account.addTransaction(transaction);
        showtrans(transaction)

    });

}



let bankAccount = new BankAccount();

// BANK USERINTERFACE

$(document).ready(function () {
    function displayAccount(accountId) {
        const account = bankAccount.findAccount(accountId);
        if (!account) {
            warningTimer()
            $(".warnimg2").html('<img src="img/blankinvalid.png" alt="">');
            $(".warn2").text("Account does not exsist");
            return;
        }

        const password = $('.password').val().trim();
        const emailAddress = $('.emaillogin').val().trim();

        if (account.password === password && account.emailAddress === emailAddress) {
            showAccount(account.id);
            loading();
        } else {
            warningTimer()
            $(".warnimg2").html('<img src="img/cahh.jpg" alt="">');
            $(".warn2").text("Check input, invalid details");
        }
    }

    $(".alinputin").on('input', function () {
        let chose = $(".alinputin").index(this)

        switch (chose) {
            case 0:
                const allinput = $(".alinputin").eq(chose).val().trim()
                let long = allinput.length
                let realLength = 50
                let rule = long > realLength
                if (rule) {
                    $(".alinputin").eq(chose).val(allinput.slice(0, realLength))
                }

                break;
            case 1:
                const allinput2 = $(".alinputin").eq(chose).val().trim()
                let long2 = allinput2.length
                let realLength2 = 50
                let rule2 = long2 > realLength2
                if (rule2) {
                    $(".alinputin").eq(chose).val(allinput2.slice(0, realLength2))
                }
                break;
            case 2:
                const allinput3 = $(".alinputin").eq(chose).val().trim()
                let long3 = allinput3.length
                let realLength3 = 50
                let rule3 = long3 > realLength3
                if (rule3) {
                    $(".alinputin").eq(chose).val(allinput3.slice(0, realLength3))
                }
                break;
            case 3:
                const allinput4 = $(".alinputin").eq(chose).val().trim()
                let long4 = allinput4.length
                let realLength4 = 30
                let rule4 = long4 > realLength4
                if (rule4) {
                    $(".alinputin").eq(chose).val(allinput4.slice(0, realLength4))
                }
                break;
            case 4:
                const allinput5 = $(".alinputin").eq(chose).val().trim()
                let long5 = allinput5.length
                let realLength5 = 30
                let rule5 = long5 > realLength5
                if (rule5) {
                    $(".alinputin").eq(chose).val(allinput5.slice(0, realLength5))
                }
                break;
            case 5:
                const allinput6 = $(".alinputin").eq(chose).val().trim()
                let long6 = allinput6.length
                let realLength6 = 30
                let rule6 = long6 > realLength6
                if (rule6) {
                    $(".alinputin").eq(chose).val(allinput6.slice(0, realLength6))
                }
                break;
            default:
                const allinput9 = $(".alinputin").eq(chose).val().trim()
                let long9 = allinput9.length
                let realLength9 = 30
                let rule9 = long9 > realLength9
                if (rule9) {
                    $(".alinputin").eq(chose).val(allinput9.slice(0, realLength9))
                }
        }

    })

    attachAccountListeners();
    $(".continue").submit(function (event) {
        event.preventDefault();
        $(".login").show()
        $(".signup").hide()


        // $(".login-page").slideUp();

        const inputtedFirstName = $(".firstname").val().trim();
        const inputtedLastName = $(".lastname").val().trim();
        const inputtedPhoneNumber = $(".phonenumber").val().trim();
        const inputtedEmailAddress = $(".mail").val().trim();
        const inputtedCountry = $("#countries").val().trim();
        const inputtedPassword = $(".passwordtocreate").val().trim();
        const accountNumer = generateAccountNumber()
        let num = 0
        const currentBalance = num.toFixed(2)
        const point = parseFloat("0")


        $(".firstname").val("");
        $(".lastname").val("");
        $(".phonenumber").val("");
        $(".mail").val("");
        $("#countries").val("");
        $(".passwordtocreate").val("")


        let newAccount = new Account(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmailAddress, inputtedCountry, inputtedPassword, currentBalance, point, accountNumer);
        bankAccount.AddAcount(newAccount);
        $(".did").text(newAccount.id);
        $(".acctid").val(newAccount.id);
        showAccount(newAccount.id)
        // console.log(newAccount.id.password)
        // console.log(newAccount)

    });
    $(".loginin").submit(function (refresh) {
        refresh.preventDefault();
        const accountId = $(this).find('.acctid').val().trim();
        displayAccount(accountId);
    });


});

window.onload = function () {

    $(".signupin").submit(function (refresh) {
        refresh.preventDefault()
        $(".continue").slideDown()
        $(".signupin").slideUp()

    })

    $(".signto").click(function () {
        $(".signup").show()
        $(".login").hide()
        $(".continue").hide()
        $(".signupin").slideDown()
    })
    $(".loginto").click(function () {
        $(".login").show()
        $(".signup").hide()
    })
    $(".switchback").click(function () {
        $(".continue").slideUp()
        $(".signupin").slideDown()
    })

}
