/* js/data.js 
  Centralized Data Store for Clinic Conditions
*/

const clinicData = {
  conditions: {
    "back-pain": {
      title: "Back Pain Treatment",
      subtitle: "Relieve chronic and acute spinal discomfort.",
      description: "Back pain can stem from muscles, nerves, bones, or joints. Whether you are dealing with a dull ache from prolonged sitting or a sharp, sudden spasm, our evidence-based approach aims not just to mask the pain, but to identify and resolve the biomechanical root cause.",
      treatment: "We utilize targeted manual therapy, spinal mobilization, and progressive core-strengthening protocols to decompress the spine, correct postural imbalances, and restore healthy, pain-free movement.",
      image: "assets/conditions/back-pain.webp"
    },
    "neck-pain": {
      title: "Neck Pain & Stiffness",
      subtitle: "Restore cervical mobility and eliminate tension.",
      description: "Whether caused by 'tech neck', poor sleeping posture, or an injury like whiplash, cervical spine issues can severely impact your quality of life, leading to chronic headaches and restricted movement.",
      treatment: "Our specialized cervical protocols include soft tissue mobilization, ergonomic retraining, and targeted stretching to alleviate nerve compression, release muscle strain, and restore your full range of motion.",
      image: "assets/conditions/neck-pain.webp"
    },
    "knee-pain": {
      title: "Knee Pain & Rehabilitation",
      subtitle: "Get back on your feet with targeted joint therapy.",
      description: "The knee is a complex, weight-bearing joint highly susceptible to wear, tear, and acute injury. From meniscus tears and ligament sprains to general patellofemoral pain (runner's knee), we provide accurate assessments to pinpoint the dysfunction.",
      treatment: "Treatment focuses on reducing joint inflammation, improving patellar tracking, and implementing specific strengthening exercises for the quadriceps, hamstrings, and glutes to stabilize the knee joint.",
      image: "assets/conditions/knee-pain.webp"
    },
    "shoulder-pain": {
      title: "Shoulder Pain Solutions",
      subtitle: "Overcome impingements and restore upper body strength.",
      description: "Shoulder pain often results from rotator cuff injuries, bursitis, or impingement syndromes. Because the shoulder is the most mobile joint in the body, it requires precise biomechanical balance to function without pain.",
      treatment: "We combine joint mobilization, scapular stabilization exercises, and therapeutic ultrasound to reduce inflammation, repair tendon damage, and restore fluid, overhead mobility.",
      image: "assets/conditions/shoulder-pain.webp"
    },
    "sciatica": {
      title: "Sciatica Relief",
      subtitle: "Address nerve compression and radiating leg pain.",
      description: "Sciatica is characterized by a sharp, shooting pain, tingling, or numbness that travels from the lower back down through the glutes and into the leg. It is typically caused by compression or irritation of the sciatic nerve.",
      treatment: "Our approach utilizes neural mobilization (nerve gliding), directional preference exercises (such as the McKenzie Method), and deep tissue release to relieve nerve pressure and centralize the pain.",
      image: "assets/conditions/sciatica.webp"
    },
    "frozen-shoulder": {
      title: "Frozen Shoulder (Adhesive Capsulitis)",
      subtitle: "Thaw the joint capsule and regain your independence.",
      description: "Frozen shoulder involves extreme stiffness and pain in the shoulder joint, progressing through 'freezing', 'frozen', and 'thawing' stages. It can severely restrict daily activities like dressing and reaching.",
      treatment: "We carefully balance gentle, passive range-of-motion stretching with progressive joint mobilization to safely stretch the tightened joint capsule without triggering severe inflammatory flares.",
      image: "assets/conditions/frozen-shoulder.webp"
    },
    "arthritis": {
      title: "Arthritis Management",
      subtitle: "Manage inflammation, preserve joints, and stay active.",
      description: "Osteoarthritis and rheumatoid arthritis can cause progressive cartilage loss, joint swelling, and morning stiffness. While arthritis cannot be cured, its symptoms can be highly managed through proper physical therapy.",
      treatment: "We develop customized low-impact strengthening programs, utilize manual therapy to improve joint lubrication, and provide activity modification strategies to protect your joints and maximize your quality of life.",
      image: "assets/conditions/arthritis.webp"
    },
    "sports-injuries": {
      title: "Sports Injury Rehabilitation",
      subtitle: "Accelerated recovery protocols for athletes.",
      description: "From ankle sprains and muscle strains to complex ligament tears, sports injuries require immediate and specialized attention to prevent chronic instability and ensure a safe return to play.",
      treatment: "We implement dynamic neuromuscular training, sport-specific functional drills, and advanced modalities to heal tissues faster, restore agility, and build resilience against future injuries.",
      image: "assets/conditions/sports-injuries.webp"
    },
    "post-surgery-rehabilitation": {
      title: "Post-Surgery Rehabilitation",
      subtitle: "Safe, guided recovery following orthopedic procedures.",
      description: "Surgeries such as ACL reconstructions, knee/hip replacements, and rotator cuff repairs require meticulous post-operative care. The early phases of healing are critical for preventing scar tissue buildup and ensuring surgical success.",
      treatment: "Working closely with your surgeon's protocols, we focus on safe pain management, restoring your range of motion, and gradually rebuilding the strength of the surrounding musculature.",
      image: "assets/conditions/post-surgery-rehabilitation.webp"
    },
    "stroke-rehabilitation": {
      title: "Stroke Rehabilitation",
      subtitle: "Neurological therapy to restore movement and function.",
      description: "Following a stroke, patients often face hemiparesis (weakness on one side), balance issues, and loss of motor control. Neurological rehabilitation relies on neuroplasticity—the brain's ability to rewire itself.",
      treatment: "Our dedicated neuro-physiotherapy includes gait training, constraint-induced movement therapy, and task-specific practice to help patients regain independence and improve daily functional mobility.",
      image: "assets/conditions/stroke-rehabilitation.webp"
    },
    "cervical-pain": {
      title: "Cervical Radiculopathy",
      subtitle: "Treating pinched nerves in the upper spine.",
      description: "Cervical pain often goes beyond simple neck stiffness. When a nerve in the neck is compressed (radiculopathy), it can cause severe pain, weakness, or a 'pins and needles' sensation radiating down the arm and into the hand.",
      treatment: "Treatment involves cervical traction to relieve nerve pressure, manual release of the surrounding musculature, and deep neck flexor strengthening to stabilize the cervical spine.",
      image: "assets/conditions/cervical-pain.webp"
    },
    "slip-disc": {
      title: "Slip Disc (Herniated Disc)",
      subtitle: "Non-surgical recovery for disc bulges and herniations.",
      description: "A herniated or bulging disc occurs when the soft inner core of a spinal disc pushes through its tough outer layer, often irritating nearby nerves. This can cause localized back pain or debilitating radiating pain.",
      treatment: "We utilize specific extension-based or flexion-based exercises (depending on your presentation) to centralize the bulge, combined with core stabilization to support the spine and prevent future disc trauma.",
      image: "assets/conditions/slip-disc.webp"
    },
    "tennis-elbow": {
      title: "Tennis Elbow (Lateral Epicondylitis)",
      subtitle: "Heal tendon overuse and restore grip strength.",
      description: "You don't have to play tennis to get tennis elbow. This condition is an overuse injury of the extensor tendons in the forearm, causing a burning pain on the outside of the elbow and a noticeably weakened grip.",
      treatment: "Our protocol involves eccentric loading exercises to rebuild tendon tissue tolerance, cross-friction massage to break down scar tissue, and ergonomic advice for daily activities.",
      image: "assets/conditions/tennis-elbow.webp"
    },
    "plantar-fasciitis": {
      title: "Plantar Fasciitis",
      subtitle: "Eliminate sharp heel pain and morning foot stiffness.",
      description: "Characterized by a sharp, stabbing pain in the heel—especially during the first steps out of bed in the morning—plantar fasciitis is an inflammation of the thick band of tissue running across the bottom of your foot.",
      treatment: "We utilize deep tissue mobilization of the calf and fascia, specific loading exercises to strengthen the foot arch, and biomechanical gait analysis to ensure proper foot mechanics during walking and running.",
      image: "assets/conditions/plantar-fasciitis.webp"
    }
  }
};