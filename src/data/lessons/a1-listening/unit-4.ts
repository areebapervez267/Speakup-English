import { c, p, q } from "@/data/lessons/authoring";
import type { LessonUnit } from "@/data/lessons/types";

export const a1ListeningUnit4: LessonUnit = {
  title: "Getting around",
  description:
    "Follow directions, travel information and short public announcements.",
  lessons: [
    {
      slug: "directions-in-town",
      title: "Directions in town",
      summary:
        "Follow a simple route and catch distance and closing time.",
      objective:
        "Understand simple directions and practical information about a place.",
      minutes: 25,
      blocks: [
        {
          type: "transcript",
          title: "Finding the museum",
          context:
            "A visitor asks a local person for directions.",
          lines: [
            { speaker: "Visitor", text: "Excuse me, how do I get to the museum?" },
            { speaker: "Local", text: "Go straight down this street, then turn left at the bank. The museum is next to the library." },
            { speaker: "Visitor", text: "Is it far?" },
            { speaker: "Local", text: "No, about five minutes on foot." },
            { speaker: "Visitor", text: "Thanks. Is there a café near the museum?" },
            { speaker: "Local", text: "Yes, there's one opposite the museum. It's open until six." },
            { speaker: "Visitor", text: "Perfect, thank you." },
          ],
        },
        {
          type: "table",
          title: "Direction words",
          columns: ["Phrase", "Meaning"],
          rows: [
            ["Go straight", "Continue without turning."],
            ["Turn left / right", "Change direction at a corner or junction."],
            ["Next to", "Beside; very close."],
            ["Opposite", "On the other side of the street or place."],
            ["On foot", "Walking, not by car or bus."],
          ],
        },
        {
          type: "exercise",
          title: "Follow the route",
          instructions:
            "Read the transcript, cover it, then choose the best answer.",
          items: [
            c(
              "Where should the visitor turn left?",
              ["At the bank", "At the library", "At the museum"],
              0,
              "The local says: turn left at the bank.",
            ),
            c(
              "What is next to the museum?",
              ["The library", "The bank", "The café"],
              0,
              "The local says: The museum is next to the library.",
            ),
            c(
              "How far is the museum?",
              ["About five minutes on foot", "About five minutes by bus", "About fifteen minutes on foot"],
              0,
              "The local says: No, about five minutes on foot.",
            ),
            c(
              "Where is the café?",
              ["Opposite the museum", "Inside the museum", "Next to the bank"],
              0,
              "The local says: there's one opposite the museum.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practise directions",
          instructions:
            "Answer first, then reveal the model. Try the last task with a real place near you.",
          items: [
            p(
              "What time does the café close?",
              "It is open until six, so it closes at 6 p.m.",
              "It is the local person's final piece of information.",
            ),
            p(
              "What is the difference between next to and opposite?",
              "Next to means beside. Opposite means on the other side of the street or place.",
              "Think about two shops side by side and two shops facing each other.",
            ),
            p(
              "Give directions from your home to a nearby shop.",
              "Model answer: Go straight, then turn right at the traffic lights. The shop is on the left.",
              "Use go straight, turn left/right and next to/opposite.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "What does the visitor ask for first?",
          ["Directions to the museum", "The price of a ticket", "A table at a café"],
          0,
          "The visitor says: Excuse me, how do I get to the museum?",
        ),
        q(
          2,
          "Which place is on the route?",
          ["A bank", "A station", "A school"],
          0,
          "The local says to turn left at the bank.",
        ),
        q(
          3,
          "How does the visitor plan to travel?",
          ["On foot", "By bus", "By car"],
          0,
          "The local gives a walking time: about five minutes on foot. The visitor does not mention a bus or car.",
        ),
        q(
          4,
          "What time does the café close?",
          ["6 p.m.", "5 p.m.", "7 p.m."],
          0,
          "The local says: It's open until six.",
        ),
      ],
    },
    {
      slug: "travel-and-transport",
      title: "Travel and transport",
      summary:
        "Buy a train ticket and catch the key travel details.",
      objective:
        "Understand ticket types, prices, platforms and times at a station.",
      minutes: 25,
      blocks: [
        {
          type: "transcript",
          title: "At the ticket desk",
          context:
            "A traveller buys a train ticket at the station.",
          lines: [
            { speaker: "Traveller", text: "Hello, I'd like a ticket to Bristol, please." },
            { speaker: "Clerk", text: "Single or return?" },
            { speaker: "Traveller", text: "Return, please. I'm coming back tomorrow." },
            { speaker: "Clerk", text: "That's twenty-four pounds fifty. The next train leaves at 10.40 from platform 3." },
            { speaker: "Traveller", text: "What time does it arrive?" },
            { speaker: "Clerk", text: "At 12.05." },
            { speaker: "Traveller", text: "Do I need to change?" },
            { speaker: "Clerk", text: "No, it's a direct train." },
            { speaker: "Traveller", text: "Thank you." },
          ],
        },
        {
          type: "table",
          title: "Ticket and travel words",
          columns: ["Word", "Meaning"],
          rows: [
            ["Single", "A ticket for one journey."],
            ["Return", "A ticket for a journey there and back."],
            ["Platform", "The place where you get on the train."],
            ["Direct", "No change of train is needed."],
            ["Change", "Get off one train and get on another."],
          ],
        },
        {
          type: "exercise",
          title: "Check the journey",
          instructions:
            "Read the transcript, cover it, then answer the questions.",
          items: [
            c(
              "What kind of ticket does the traveller buy?",
              ["A return ticket", "A single ticket", "A child ticket"],
              0,
              "The traveller says: Return, please. I'm coming back tomorrow.",
            ),
            c(
              "How much is the ticket?",
              ["£24.50", "£24.05", "£34.50"],
              0,
              "The clerk says: That's twenty-four pounds fifty.",
            ),
            c(
              "Where does the train leave from?",
              ["Platform 3", "Platform 2", "Platform 13"],
              0,
              "The clerk says: The next train leaves at 10.40 from platform 3.",
            ),
            c(
              "Does the traveller need to change trains?",
              ["No, it is direct", "Yes, at Bristol", "Yes, at platform 3"],
              0,
              "The clerk says: No, it's a direct train.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practise travel language",
          instructions:
            "Answer aloud, then reveal the model response.",
          items: [
            p(
              "What time does the train leave?",
              "It leaves at 10.40.",
              "The clerk gives the departure time with the platform.",
            ),
            p(
              "What time does the train arrive?",
              "It arrives at 12.05.",
              "The traveller asks What time does it arrive?",
            ),
            p(
              "Ask for a return ticket to Bristol.",
              "Model answer: Hello, I'd like a return ticket to Bristol, please.",
              "Use I'd like … please.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "Where is the traveller going?",
          ["Bristol", "London", "Oxford"],
          0,
          "The traveller asks for a ticket to Bristol.",
        ),
        q(
          2,
          "What does a return ticket mean?",
          ["A ticket for going and coming back", "A ticket for one journey", "A free ticket"],
          0,
          "The traveller is coming back tomorrow, so a return ticket is for both journeys.",
        ),
        q(
          3,
          "What time does the train leave?",
          ["10.40", "12.05", "10.04"],
          0,
          "The clerk says: The next train leaves at 10.40.",
        ),
        q(
          4,
          "What does direct mean here?",
          ["No change of train is needed", "The train is very fast", "The ticket is cheaper"],
          0,
          "The clerk explains that the traveller does not need to change: it's a direct train.",
        ),
      ],
    },
    {
      slug: "short-announcements",
      title: "Short announcements",
      summary:
        "Catch the key information in three short public announcements.",
      objective:
        "Understand the main information in short, clear public announcements.",
      minutes: 25,
      blocks: [
        {
          type: "transcript",
          title: "Three announcements",
          context:
            "You are in a shopping centre, a station and a library.",
          lines: [
            { speaker: "Announcement 1", text: "Attention, shoppers. The supermarket will close in fifteen minutes, at eight o'clock. Please bring your shopping to the checkouts now." },
            { speaker: "Announcement 2", text: "The four-thirty train to Oxford is late. It will now leave at four-fifty from platform 2." },
            { speaker: "Announcement 3", text: "A blue bag is at the front desk. Please ask a member of staff if it is yours." },
          ],
        },
        {
          type: "tip",
          title: "Listen for the change",
          text: "Announcements often give a change: a new time, a new platform or a closing time. Listen for words like now, late, change and instead. The old information is often not repeated.",
        },
        {
          type: "exercise",
          title: "Catch the key facts",
          instructions:
            "Read the transcript, cover it, then choose the best answer.",
          items: [
            c(
              "When will the supermarket close?",
              ["At 8 p.m.", "In eight minutes", "At 8 a.m."],
              0,
              "The announcement says the supermarket will close in fifteen minutes, at eight o'clock.",
            ),
            c(
              "What is the new time for the Oxford train?",
              ["4.50", "4.30", "2.00"],
              0,
              "The train was due at 4.30 but will now leave at 4.50.",
            ),
            c(
              "Which platform will the Oxford train leave from?",
              ["Platform 2", "Platform 4", "Platform 3"],
              0,
              "The announcement says: from platform 2.",
            ),
            c(
              "What should you do if the blue bag is yours?",
              ["Ask a member of staff at the front desk", "Take it from the platform", "Call the supermarket"],
              0,
              "The third announcement says: Please ask a member of staff if it is yours.",
            ),
          ],
        },
        {
          type: "practice",
          title: "Practise announcements",
          instructions:
            "Answer from memory, then reveal the model.",
          items: [
            p(
              "What item is lost?",
              "A blue bag. It is at the front desk.",
              "Listen to the third announcement.",
            ),
            p(
              "How late is the Oxford train?",
              "It was due at 4.30 and will now leave at 4.50, so it is twenty minutes late.",
              "Subtract 4.30 from 4.50.",
            ),
            p(
              "Write a short announcement to say a shop closes at 6 p.m.",
              "Model answer: Attention, shoppers. The shop will close in ten minutes, at six o'clock.",
              "Use Attention, shoppers and a clear closing time.",
            ),
          ],
        },
      ],
      quiz: [
        q(
          1,
          "How many minutes until the supermarket closes?",
          ["Fifteen", "Eight", "Fifty"],
          0,
          "The announcement says: close in fifteen minutes.",
        ),
        q(
          2,
          "Where is the Oxford train now leaving from?",
          ["Platform 2", "Platform 3", "The front desk"],
          0,
          "The announcement says the train will leave from platform 2.",
        ),
        q(
          3,
          "What colour is the lost bag?",
          ["Blue", "Black", "Brown"],
          0,
          "The announcement describes a blue bag at the front desk.",
        ),
        q(
          4,
          "What is the main purpose of the second announcement?",
          ["To give a new departure time", "To sell tickets", "To describe a shop"],
          0,
          "It explains that the train is late and gives a new departure time and platform.",
        ),
      ],
    },
  ],
};
