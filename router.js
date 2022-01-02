import renderMain from "./pages/main/main.js";
import RenderCandidate from "./pages/candidate/candidate.js";
import renderParty from "./pages/party/party.js";
import renderElection from "./pages/electionSystem/election.js";


export default function () {
  const router = new Navigo("/", { hash: true });

  router
    .on({
      "/": () => {
        // call updatePageLinks to let navigo handle the links
        // when new links have been inserted into the dom
        renderMain().then(router.updatePageLinks);
      },
      candidate: () => {
        RenderCandidate();
      },
      party: () => {
        renderParty();
      },
      election: () => {
        renderElection();
      }
    })
    .resolve();
}
