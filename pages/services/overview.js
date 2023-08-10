import styles from "./overview.module.css";

export default function Internet() {
  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.header}>Request Services</h1>
        <div className={styles.body}>
          <h2 className="pt-24">Personal Information</h2>
          <form>
            <label className="flex-col">
              First Name
              <input
                className="text-input"
                name="first-name"
                autoComplete="on"
              />
            </label>
            <label className="flex-col">
              Last Name
              <input
                className="text-input"
                name="last-name"
                autoComplete="on"
              />
            </label>
            <label className="flex-col">
              Email
              <input className="text-input" name="email" autoComplete="on" />
            </label>
            <label className="flex-col">
              Phone
              <input className="text-input" name="phone" autoComplete="on" />
            </label>
            <label className="flex-col">
              Street Address 1
              <input
                className="text-input"
                name="street-address-1"
                autoComplete="on"
              />
            </label>
            <label className="flex-col">
              Street Address 2
              <input
                className="text-input"
                name="street-address-2"
                autoComplete="on"
              />
            </label>
            <div className="flex-between">
              <div className="w-full pr-24">
                <label className="flex-col">
                  City
                  <input className="text-input" name="city" autoComplete="on" />
                </label>
              </div>
              <div className="w-92">
                <label className="flex-col">
                  State
                  <input
                    className="text-input"
                    name="state"
                    autoComplete="on"
                  />
                </label>
              </div>
            </div>
            <label className="flex-col">
              Zip
              <input className="text-input" name="zip" autoComplete="on" />
            </label>
            <label className="flex-col">
              Place of Employment
              <input
                className="text-input"
                name="street-address-2"
                autoComplete="on"
              />
            </label>
            <label className="flex-col">
              Work Contact
              <input
                className="text-input"
                name="street-address-2"
                autoComplete="on"
              />
            </label>
            <div className="my-12">
              <label>Do You Rent or Own?</label>
              <fieldset>
                <div className="radio flex">
                  <input
                    type="radio"
                    id="housingChoice1"
                    name="employment"
                    value="own"
                    className="flex"
                  />
                  <label htmlFor="housingChoice1" className="mr-4">
                    Own
                  </label>
                  <input
                    type="radio"
                    id="housingChoice2"
                    name="employment"
                    value="rent"
                    className="mr-4 flex"
                  />
                  <label htmlFor="housingChoice2">Rent</label>
                </div>
              </fieldset>
            </div>
            <label className="flex-col">
              Landlord Name
              <input
                className="text-input"
                name="street-address-2"
                autoComplete="on"
              />
            </label>
            <label className="flex-col">
              Landlord Phone
              <input
                className="text-input"
                name="street-address-2"
                autoComplete="on"
              />
            </label>
            <div className={"divider"}></div>
            <h2>Services Request</h2>
            <div>
              <label htmlFor="installation-date">
                Preferred Installation Date
              </label>
            </div>
            <div className="flex w-full datetime-local-container">
              <input
                id="party"
                className="datetime-local mb-20"
                type="date"
                name="partydate"
                min="2022-06-01T12:00"
                max="2100-01-30T12:00"
                required
              />
              <span className="open-button">
                <button type="button">📅</button>
              </span>
            </div>
            {/* Cable TV Packages */}
            <div className="mt-64">
              <label>Cable TV Package</label>
              <fieldset>
                <div className="radio flex-col">
                  <div className="flex">
                    <input
                      type="radio"
                      id="bronze"
                      name="package"
                      value="bronze"
                      className="flex"
                    />
                    <label htmlFor="bronze" className="mr-4">
                      Bronze
                    </label>
                  </div>
                  <div className="flex">
                    <input
                      type="radio"
                      id="silver"
                      name="package"
                      value="silver"
                      className="mr-4 flex"
                    />
                    <label htmlFor="silver">Silver</label>
                  </div>
                  <div className="flex">
                    <input
                      type="radio"
                      id="gold"
                      name="package"
                      value="gold"
                      className="flex"
                    />
                    <label htmlFor="gold" className="mr-4">
                      Gold
                    </label>
                  </div>
                  <div className="flex">
                    <input
                      type="radio"
                      id="platinum"
                      name="package"
                      value="platinum"
                      className="mr-4 flex"
                    />
                    <label htmlFor="platinum">Platinum</label>
                  </div>
                </div>
              </fieldset>
            </div>
            {/* Premium Movie Channels */}
            <div className="mt-16">
              <label>Premium Movie Channels</label>
              <fieldset>
                <div className="radio flex-col">
                  <div className="flex">
                    <input
                      type="checkbox"
                      id="cinemax"
                      name="channels"
                      value="cinemax"
                      className="mr-4 flex"
                    />
                    <label htmlFor="cinemax" className="mr-4">
                      Cinemax
                    </label>
                  </div>
                  <div className="flex">
                    <input
                      type="checkbox"
                      id="encore_starz"
                      name="channels"
                      value="encore_starz"
                      className="mr-4 flex"
                    />
                    <label htmlFor="encore_starz">Encore/Starz</label>
                  </div>
                  <div className="flex">
                    <input
                      type="checkbox"
                      id="hbo"
                      name="channels"
                      value="hbo"
                      className="mr-4 flex"
                    />
                    <label htmlFor="hbo" className="mr-4">
                      Hbo
                    </label>
                  </div>
                  <div className="flex">
                    <input
                      type="checkbox"
                      id="playboy"
                      name="channels"
                      value="playboy"
                      className="mr-4 flex"
                    />
                    <label htmlFor="playboy">Playboy</label>
                  </div>
                </div>
              </fieldset>
            </div>
            {/* Internet Package */}
            <div className="mt-16">
              <label>Internet Package</label>
              <fieldset>
                <div className="radio flex-col">
                  <div className="flex">
                    <input
                      type="radio"
                      id="life_line"
                      name="package"
                      value="life_line"
                      className="flex"
                    />
                    <label htmlFor="life_line" className="mr-4">
                      Life Line
                    </label>
                  </div>
                  <div className="flex">
                    <input
                      type="radio"
                      id="basic_surfer"
                      name="package"
                      value="basic_surfer"
                      className="mr-4 flex"
                    />
                    <label htmlFor="basic_surfer">Basic Surfer</label>
                  </div>
                  <div className="flex">
                    <input
                      type="radio"
                      id="standard_user"
                      name="package"
                      value="standard_user"
                      className="flex"
                    />
                    <label htmlFor="standard_user" className="mr-4">
                      Standard User
                    </label>
                  </div>
                  <div className="flex">
                    <input
                      type="radio"
                      id="premium_user"
                      name="package"
                      value="premium_user"
                      className="mr-4 flex"
                    />
                    <label htmlFor="premium_user">Premium User</label>
                  </div>
                  <div className="flex">
                    <input
                      type="radio"
                      id="pro_gamer"
                      name="package"
                      value="pro_gamer"
                      className="mr-4 flex"
                    />
                    <label htmlFor="pro_gamer">Pro Gamer</label>
                  </div>
                </div>
              </fieldset>
            </div>
            <button
              type="submit"
              value="Submit Request"
              className="button-primary"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
