import {useState} from "react";

export function Welcome() {

    const [name, setName] = useState("");

    function JumpToAmazon() {
        if (name === '') return;
        window.location.href = "https://young-haze-a0a2.5hy5p59rjn.workers.dev?name=" + name;
    }

  return (
      <>
          <div className="flex flex-col items-center w-screen h-screen overflow-screen">
              <div className="px-4 max-w-[650px] flex flex-col items-center">
                  <div className="max-w-[300px] max-h-[300px]">
                      <img className="w-full h-full object-contain" src="assets/amazon.jpg"/>
                  </div>

                  <div
                      className="flex flex-col items-end w-full gap-1 border-1 border-gray-200 shadow-lg px-6 py-3 rounded overflow-hidden">
                      <div className="text-[1.1rem] font-bold w-full">
                          Doctor status unlocked. Congratulations Aditya!
                      </div>
                      <div className="w-fit flex flex-row items-center">
                          <div className="text-[0.8rem] italic">
                              On behalf of everyone at Augment Research Group.
                          </div>
                          <img className="w-[33px]" src="assets/augment.png"/>
                      </div>
                  </div>
                  <div className="flex flex-col items-center mt-5 gap-4">
                      <div className="text-[1.3rem] font-bold">
                          70,00 €
                      </div>
                      <div>
                          <input
                              className={"border border-gray-200 rounded-lg px-2 py-2 text-[0.9rem]"}
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder={"Please enter the password."}
                          />
                      </div>
                  <button
                      className={
                        "text-[0.8rem] bg-yellow-300 px-5 py-2 rounded-full shadow-lg hover:bg-yellow-400 cursor-pointer" +
                        (name === "" ? " opacity-50 cursor-not-allowed" : "")
                      }
                      onClick={JumpToAmazon}
                      disabled={name === ""}
                  >
                      Apply to your Amazon account
                  </button>
                  </div>
                  <div className="mt-6 flex flex-col gap-2 text-[0.8rem]">
                      <div>
                          Looking for a claim code? Just click to have your balance credited to your account.
                      </div>
                      <div>
                          Once applied to your Amazon account, the full amount will be added to your Gift Card balance.
                          Your Gift Card balance cannot be transferred to other accounts, used to purchase other gift
                          cards, or—except where required by law—redeemed for cash.
                      </div>
                      <div>
                          Your Gift Card balance will automatically be applied to eligible orders during checkout and
                          when you use 1-Click. If you don’t want to use your Gift Card balance on your order, you can
                          deselect it as a payment method at checkout.
                      </div>
                      <div>
                          You can contact the Gift Card brand service if you have a problem or questions regarding
                          withdrawal, use of your Gift Card, or to check your balance. If your issue or question relates
                          to your order, please contact our Customer Service with the following information:
                      </div>
                      <div>
                          Order number: 406-8190109-2077164
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}
