export default function Checkout() {
  return (
    <div>
      <div className="block xl:flex justify-between">
        <div>
          <p>Home \ Cart \ Checkout</p>
          <div className="flex items-center justify-between">
            <img src="" alt="" />
            <div>
              <h1>Executive Mesh</h1>
              <p>
                Comfort and functionality combined. this chair promotes the back
                health an beautifies the office environment
              </p>
              <p>Quantity 1</p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-white p-8">
            <h1>Payment Details</h1>
            <p className="my-6 text-sm text-gray-600">
              Complete your purchase by providing your payment details
            </p>
            <form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide text-gray-700 text-xs mb-2"
                    htmlFor="grid-email"
                  >
                    Email Address
                  </label>
                  <input
                    className=" block w-full bg-backgroundGrey text-gray-700 text-sm py-3 px-4 mb-3 leading-tight border-none"
                    id="grid-password"
                    type="email"
                    placeholder="clara-thomas@gmail.com"
                  />
                </div>
              </div>
              <p className="text-gray-600 text-xs mb-3 ">
                Select Payment Method
              </p>

              <div className="block xl:flex items-center justify-between">
                <div className="flex items-center bg-backgroundGrey p-4 xl:-mt-4 xl:w-56 border border-gray-400">
                  <input
                    checked
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-black bg-gray-100 border-black focus:ring-black  "
                  />
                  <label
                    htmlFor="default-radio-2"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Credit/Debit Card
                  </label>
                </div>
                <div className="flex items-center mb-4  bg-backgroundGrey p-4 xl:ml-3 xl:w-56 border border-gray-400 mt-4 xl:mt-0 ">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4 text-black bg-gray-100 border-black focus:ring-black 0 focus:ring-2 "
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ms-2 text-sm font-medium text-black"
                  >
                    Virtual Account
                  </label>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide text-gray-700 text-xs mb-2"
                    htmlFor="grid-email"
                  >
                    Card Number
                  </label>
                  <input
                    className="appearance-none block w-full bg-backgroundGrey text-sm border-none text-gray-700 py-3 px-4 mb-3 leading-tight "
                    id="grid-password"
                    type="password"
                    placeholder="4756 2890 8182 3889"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block tracking-wide text-gray-700 text-xs mb-2"
                    htmlFor="grid-first-name"
                  >
                    Expiry Date
                  </label>
                  <input
                    className="appearance-none block w-full bg-backgroundGrey border-none py-3 px-4 mb-3 leading-tight text-sm"
                    id="grid-first-name"
                    type="text"
                    placeholder="23/09"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block tracking-wide text-gray-700 text-xs mb-2"
                    htmlFor="grid-last-name"
                  >
                    CVV
                  </label>
                  <input
                    className="appearance-none block w-full bg-backgroundGrey text-gray-700 border-none text-sm  py-3 px-4 leading-tight "
                    id="grid-last-name"
                    type="text"
                    placeholder="256"
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="bg-white mt-10 p-6">
            <div className="flex items-center justify-between text-xs xl:text-sm ">
              <p className="text-gray-600">Subtotal</p>
              <p>$650</p>
            </div>
            <div className="flex items-center justify-between text-xs xl:text-sm">
              <p className="text-gray-600">Discount</p>
              <p>$0</p>
            </div>
            <div className="flex items-center justify-between text-xs xl:text-sm">
              <p className="text-gray-600">Total</p>
              <p>$650</p>
            </div>
            <div>
              <button className="bg-black text-white w-full py-4 mt-3">
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
