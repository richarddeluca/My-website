import {
  SiReact,
  SiTypescript,
  SiCsswizardry,
  SiNodedotjs,
  SiHtml5,
  SiElixir,
  SiGodotengine,
  SiNextdotjs,
  SiFigma,
} from 'react-icons/si'
import {
  Card,
  Light,
  Line,
  SkillBox,
  SkillDot,
  SkillLine,
  SkillsStyle,
} from './styles'
import { skills } from '../../../data'

function skillIcon(icon: string, color: string) {
  return icon === 'SiReact' ? (
    <SiReact size={56} color={color} />
  ) : icon === 'SiTypescript' ? (
    <SiTypescript size={56} color={color} />
  ) : icon === 'SiCsswizardry' ? (
    <SiCsswizardry size={56} color={color} />
  ) : icon === 'SiNodedotjs' ? (
    <SiNodedotjs size={56} color={color} />
  ) : icon === 'SiHtml5' ? (
    <SiHtml5 size={56} color={color} />
  ) : icon === 'SiElixir' ? (
    <SiElixir size={56} color={color} />
  ) : icon === 'SiGodotengine' ? (
    <SiGodotengine size={56} color={color} />
  ) : icon === 'SiFigma' ? (
    <SiFigma size={56} color={color} />
  ) : icon === 'SiNextdotjs' ? (
    <SiNextdotjs size={56} color={color} />
  ) : (
    <SiNextdotjs size={56} color={color} />
  )
}

export function Skills() {
  return (
    <SkillsStyle>
      <div className="content">
        <div className="skillsPoints">
          {skills.map((skill) => {
            return (
              <SkillLine key={skill.id}>
                <h4>{skill.skill}</h4>
                <Line>
                  {skill.points.map((point) => (
                    <SkillDot
                      key={point.description}
                      know={point.knowledge}
                    ></SkillDot>
                  ))}
                </Line>
              </SkillLine>
            )
          })}
        </div>
        <div className="skillsCardsBoard">
          {skills.map((skill) => {
            return (
              <SkillBox key={skill.id}>
                <Card className="card">
                  {skillIcon(skill.icon, skill.color)}

                  <p>{skill.skill}</p>
                  {/* <Lamp className="lamp" ></Lamp> */}
                </Card>
                <Light
                  className="light"
                  style={{ backgroundColor: skill.color }}
                ></Light>
              </SkillBox>
            )
          })}
        </div>
      </div>
    </SkillsStyle>
  )
}
