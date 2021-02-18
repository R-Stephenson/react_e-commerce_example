import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

import mic from "../media/mic.png";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="container mt-4 bg-white">
        {/* start of Main page container */}
        <div className="row">
          <div className="col-10 text-capitalize mx-auto text-center text-grey mt-5 mb-3">
            <h1>Turn on the MIC!</h1>
            <br />
            <h2 className="mb-0 pb-0">
              <span className="font-weight-bold">M</span>
              otivation, <span className="font-weight-bold">I</span>nnovation,
              <span className="text-lowercase">
                {" "}
                <small>and</small>
              </span>{" "}
              <span className="font-weight-bold">C</span>
              onversation
            </h2>
            <div>
              <span>
                <br />
                <img
                  src={mic}
                  className="hi"
                  alt="product"
                  style={{ height: 200 }}
                />
              </span>
            </div>
          </div>
        </div>
        {/* end of Title row */}

        <div className="row ">
          {/* this puts bulb underneath */}
          <div className=" col-8 mx-auto px-0 col-md-7 text-center text-grey mt-4 mb-5">
            <h4>
              <small>
                <strong>
                  Here at <em>insert</em> we like the MIC on full volume! <br />
                  <br />
                  We are motivated to innovate, and we achieve this through
                  conversation.
                </strong>{" "}
                <br />
                <br />
                Established in 2020 from a 2-PC set-up in a home office, our
                founder, Romana, elevated <em>insert</em> into a multi-million
                pound company that is focused on community, both in business
                structure and product output. Now <em>insert</em> employs over
                300 staff in 6 countries across 3 continents, and it is growing!
                Here, at <em>insert</em> we work to a 3-step beat that energises
                great minds, promotes inclusivity and offers a world stage to
                the passionate. <br /> <br />
                <strong>
                  So, what is the breakdown of MIC, what does it mean, and how
                  does it work?
                </strong>
                <br />
                <br />• <span className="font-weight-bold">Motivation</span>
                <br />
                This is simple. We seek out the motivated. We are passionate
                about what we do and we go out of our way to employ likeminded
                individuals that are just as passionate about our business as we
                are. This is an integral focus at <em>insert</em>and is the very
                foundation of our business.
                <br />
                <br />• <span className="font-weight-bold">Innovation</span>
                <br />
                Motivation drives innovation. Those who aspire to be better will
                always do their best. Here at <em>insert</em> we ensure to
                always be working with the latest technologies. We found that by
                doing this we remain market-leading as well as provide our
                employees the opportunity to always be developing their
                skill-set. Who doesn't like getting to try out the latest and
                coolest tech? We have seen great innovation and creativity
                through this practise, and from internal serveys and community
                meetings, we have scored 5/5 for emplyee satisfaction in the
                Employer Support for Technological Development category, which
                we are very proud of!
                <br />
                <br />• <span className="font-weight-bold">Communication</span>
                <br />
                Here at <em>insert</em> we promote community. It is not the big
                bosses and the rest of the employess... It us, all of us,
                together. Once a week our top bosses remotely hold a meeting
                with area managers and team leaders. Doing this remotely works
                really well to get the community together in a comfortable and
                accessable way. Our team leaders and managers will communicate
                the progess of the week to the CEO-and-team and visa versa. This
                way we all stay in the loop. This meeting is also where big
                innovative opportunites are communicated as well as awards and
                updates on business progress and new directions. Additonally,
                our employees have the opportunity to an open and accessible
                line to communicate with those at the top once a month via a
                remote meeting. Simply apply, and attend. No one is left out. We
                work together for each other because the better our business is
                for the employees, the better our business is for the market.
              </small>
            </h4>
            <br />
            <Link to="/product-list">
              <ButtonContainer bold>browse our products</ButtonContainer>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
