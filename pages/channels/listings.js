import Layout from "../../components/layout";
import Navbar from "../../components/navbar/navbar";
import Logo from "../../components/logo/logo.js";
import { listings } from "../../public/channels.js";

export default function Listings() {
  return (
    <Layout>
      <Logo></Logo>
      <h1>Channel Listing</h1>
      <section className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Channel</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((x) => (
              <tr key={x.id}>
                <td>{x.channel}</td>
                <td>{x.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <Navbar></Navbar>
    </Layout>
  );
}
