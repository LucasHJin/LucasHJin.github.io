"use client";
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "../styling/cat.css";

// Logic from obsidian cat plugin (https://github.com/LucasHJin/obsidian-pets)

export default function Cat({
  leftBound,
  rightBound,
  animations,
  moveDist,
  catType,
}) {
  const catRef = useRef(null); // HTMLDivElement
  const currentX = useRef(Math.random() * (rightBound - leftBound) + leftBound);
  const direction = useRef(1); // 1 for right, -1 for left
  const currentAnimation = useRef("none");

  // Updates cat to play the right animation
  const updateCatElementStyle = (el, animation) => {
    const keyframeName = `${animation.name}-${catType}`;
    createKeyframe(animation, keyframeName);

    el.style.animation = `${keyframeName} ${animation.duration}ms steps(${animation.frameCount}) infinite`;
    el.style.setProperty("--sprite-url", `url(${animation.spriteUrl})`);
    el.style.setProperty(
      "--sprite-size",
      `${animation.frameCount * animation.frameWidth}px auto`
    );
    el.style.setProperty("--cat-size", `${animation.frameWidth}px`);
    el.style.setProperty("--scale-x", `${direction.current}`);
  };

  // Creates keyframe fora nimation if non existent
  const createKeyframe = (animation, keyframeName) => {
    if (document.getElementById(`kf-${keyframeName}`)) {
		return;
	}

    const style = document.createElement("style");
    style.id = `kf-${keyframeName}`;
    style.innerHTML = `
		@keyframes ${keyframeName} {
			from { background-position: 0 0; }
			to { background-position: -${animation.frameCount * animation.frameWidth}px 0; }
		}`;
    document.head.appendChild(style);
  };

  // Plays specified animation
  const playAnimation = async (name, multiples = 1) => {
    const el = catRef.current;
    if (!el || !animations[name]) return;

    if (currentAnimation.current === name) return;
    currentAnimation.current = name;

    el.style.animation = "none";
    el.offsetHeight; // Force reflow

    updateCatElementStyle(el, animations[name]);

    if (name === "run") {
      for (let i = 0; i < multiples; i++) {
        await move(el, animations[name].duration);
      }
    } else if (name === "jump") {
      await move(el, animations[name].duration, true);
    } else if (name === "sit" || name === "sleep") {
      const extensionAmount = Math.floor(Math.random() * 10) + 5;
      // Wait to make sure action has time to occur
      await new Promise((res) =>
        setTimeout(res, animations[name].duration * extensionAmount)
      );
    } else if (name !== "die") {
      // Idleing animation (not death)
      const extensionAmount = Math.floor(Math.random() * 2) + 2;
      await new Promise((res) =>
        setTimeout(res, animations[name].duration * extensionAmount)
      );
    }
  };

  // Moves the cat element (slides it)
  const move = async (el, duration, isJump = false) => {
    const magnitude = isJump
      ? moveDist * (Math.random() * 0.3 + 1.5)
      : moveDist;
    const bias = 0.95;
    const dir = Math.random() < bias ? direction.current : -direction.current;
    let dx = magnitude * dir;

    let newX = currentX.current + dx;

    if (newX < leftBound || newX > rightBound) {
      dx = -dx;
      newX = currentX.current + dx;
    }

    if (newX === currentX.current) return;

    direction.current = dx < 0 ? -1 : 1;

    el.style.transition = `left ${duration}ms linear`;
    el.style.left = `${newX}px`;
    el.style.setProperty("--scale-x", `${direction.current}`);

    await new Promise((res) => {
      const handle = () => {
        el.removeEventListener("transitionend", handle);
        currentX.current = newX;
        res();
      };
      el.addEventListener("transitionend", handle, { once: true });
    });
  };

  // Main logic (runs on mount -> starts and continues animation loop indefinitely)
  useEffect(() => {
    const el = catRef.current;
    if (!el) return;

    el.style.left = `${currentX.current}px`;

    let isDestroyed = false;

    const startLoop = async () => {
      const ACTIONS = Object.keys(animations).filter(
        (a) => a !== "run" && a !== "die"
      );

      while (!isDestroyed) {
        const rand = Math.floor(Math.random() * ACTIONS.length);
        const action = ACTIONS[rand];
        await playAnimation(action);

        console.log(`Playing action: ${action}`);

        const runDuration = animations["run"].duration;
        const delay = Math.floor(Math.random() * 6000) + 3000;

        console.log("Delay", delay);

        await playAnimation("run", Math.floor(delay / runDuration));
      }
    };

    playAnimation("idle").then(startLoop);

    return () => {
      isDestroyed = true;
    };
  }, []);

  return <div ref={catRef} className="cat" />;
}

Cat.propTypes = {
  leftBound: PropTypes.number.isRequired,
  rightBound: PropTypes.number.isRequired,
  animations: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      spriteUrl: PropTypes.string.isRequired,
      frameCount: PropTypes.number.isRequired,
      frameWidth: PropTypes.number.isRequired,
      frameHeight: PropTypes.number.isRequired,
      duration: PropTypes.number.isRequired,
      action: PropTypes.func,
    })
  ).isRequired,
  moveDist: PropTypes.number.isRequired,
  catType: PropTypes.string.isRequired,
};
