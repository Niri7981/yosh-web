"use client";

import { useState } from "react";
import { sourceLinks } from "@/lib/links";
import { useLanguage } from "@/components/LanguageProvider";

const checksum = "a3f2adf45d95ee1e213e3235c5cd73b104b3b3bfeebb4dc5c792fb7bc95a995b";
const commands = 'codex plugin marketplace add "$HOME/Downloads/yosh-standalone-marketplace"\ncodex plugin add yosh-local-dev@yosh-standalone-testing';
const copy = {
  en: {
    eyebrow: "01 / GET THE PLUGIN", title: ["A new capability.", "In your Codex."],
    body: "Download Yosh, then let Codex handle the installation. The package includes its own local backend. No separate Node.js installation needed.",
    version: "0.2.13 · Preview · Apple Silicon macOS", download: "Download plugin ZIP ↓", hash: "SHA-256 checksum ↗",
    tabs: ["Ask Codex", "Use the terminal"], prompt: "Install the Yosh plugin from this website’s 0.2.13 package. Verify the checksum, add its local marketplace, then install the plugin. Check the connection only; do not create a wallet, authorize spending or make a payment.",
    copyPrompt: "Copy instructions for Codex", copyCommands: "Copy commands", copied: "Copied — paste into Codex", commandsCopied: "Commands copied", failed: "Copy failed. Select and copy the text below.",
    promptHelp: "Paste into a Codex chat with local execution access. Codex can download and install the package for you. Review any installation prompts it presents.",
    terminalHelp: "With the Codex CLI installed, extract the ZIP into Downloads. Keep the yosh-standalone-marketplace folder there, then run:",
    next: ["Reconnect the plugin", "After installation, start a new Codex chat or reconnect the plugin. Its current display name is “Yosh Dev — 开发验收版”."],
    check: 'Use Yosh on Mainnet to check connection, wallet, Grant and daily allowance. Only read status; do not purchase or recover a payment.',
    checkLabel: "YOUR FIRST MESSAGE", boundaryTitle: "Before your first purchase",
    boundary: "Mainnet needs an existing configured Yosh wallet and spending controls. New Mainnet wallet setup is not included yet. Devnet uses separate test funds. Installation does not grant payment authority.",
    scope: "x402 + MPP Solana Charge · USDC on Solana · MPP needs a separate Grant and SOL fee cap.",
    legacy: "Looking for the older macOS App?", legacyLink: "0.1.0 Beta release ↗", legacyNote: "Historical download; does not include this plugin or its MPP workflow.",
  },
  zh: {
    eyebrow: "01 / 安装插件", title: ["新的能力。", "就在你的 Codex。"],
    body: "下载 Yosh，再交给 Codex 完成安装。插件自带本地后端，无需额外安装 Node.js。",
    version: "0.2.13 · 预览版 · Apple Silicon macOS", download: "下载插件 ZIP ↓", hash: "SHA-256 校验值 ↗",
    tabs: ["交给 Codex", "使用终端"], prompt: "请从本网站下载 Yosh 0.2.13 插件包，校验文件，添加本地 marketplace 并安装插件。安装后只检查连接；不要创建钱包、授予消费权限或发起付款。",
    copyPrompt: "复制指令，交给 Codex", copyCommands: "复制安装命令", copied: "已复制，请粘贴到 Codex", commandsCopied: "安装命令已复制", failed: "复制失败，请选中下方文字手动复制。",
    promptHelp: "粘贴到可以执行本地命令的 Codex 对话。Codex 可以代你下载和安装；如出现安装确认，请审阅后操作。",
    terminalHelp: "已安装 Codex CLI 时，将 ZIP 解压到“下载”目录，保留其中的 yosh-standalone-marketplace 文件夹，然后执行：",
    next: ["重新连接插件", "安装后新建 Codex 对话，或重新连接插件。目前显示名称为「Yosh Dev — 开发验收版」。"],
    check: "使用 Yosh 在 Mainnet 上检查连接、钱包、Grant 和每日额度。只读查询，不购买，也不恢复付款。",
    checkLabel: "安装后的第一句话", boundaryTitle: "第一次购买前",
    boundary: "主网需已有的 Yosh 钱包和支出配置，目前尚未包含首次主网钱包配置。测试网使用隔离的测试资金。安装插件本身不会授予付款权限。",
    scope: "x402 + MPP Solana Charge · Solana USDC · MPP 需单独的 Grant 和 SOL 费用上限。",
    legacy: "在找旧版 macOS App？", legacyLink: "0.1.0 Beta 发布页 ↗", legacyNote: "历史下载，不包含当前插件及其 MPP 使用流程。",
  },
};

export default function GetStartedSection() {
  const { locale } = useLanguage();
  const c = copy[locale];
  const [mode, setMode] = useState<"agent" | "terminal">("agent");
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const [fallback, setFallback] = useState("");

  async function copyInstall() {
    const url = new URL(sourceLinks.pluginDownload, window.location.origin).href;
    const instruction = `${c.prompt}\n\nPackage: ${url}\nSHA-256: ${checksum}\n\nCheck that this is Apple Silicon macOS and that the Codex CLI supports plugin installation. If Yosh is already installed, report its version and ask before replacing it or stopping a running backend. Otherwise download the ZIP, verify SHA-256, and extract it into a new folder under Downloads. Use the absolute path of the extracted yosh-standalone-marketplace folder for:\ncodex plugin marketplace add <absolute-path-to-yosh-standalone-marketplace>\ncodex plugin add yosh-local-dev@yosh-standalone-testing\n\nReport installation status. Do not change wallets, Grants, budgets or pause state, and do not pay or recover a payment.`;
    const value = mode === "agent" ? instruction : commands;
    try {
      await navigator.clipboard.writeText(value);
      setState("copied");
      setFallback("");
    } catch {
      setFallback(value);
      setState("failed");
    }
  }

  return (
    <section className="essay-section plugin-install-section" id="get-started" aria-labelledby="get-started-title">
      <div className="editorial-inset">
        <p className="purchase-flow-eyebrow">{c.eyebrow}</p>
        <div className="plugin-install-grid">
          <div className="section-copy">
            <h2 className="editorial-title" id="get-started-title">{c.title[0]}<br />{c.title[1]}</h2>
            <p className="editorial-body">{c.body}</p>
            <p className="plugin-version">{c.version}</p>
            <a className="intro-download-button" href={sourceLinks.pluginDownload} download>{c.download}</a>
            <a className="plugin-checksum text-link" href={sourceLinks.pluginChecksum} target="_blank" rel="noreferrer">{c.hash}</a>
          </div>
          <div className="plugin-install-card">
            <div className="plugin-install-tabs" role="group" aria-label={locale === "zh" ? "安装方式" : "Installation method"}>
              {(["agent", "terminal"] as const).map((value, index) => <button type="button" key={value} aria-pressed={mode === value} onClick={() => { setMode(value); setState("idle"); setFallback(""); }}>{c.tabs[index]}</button>)}
            </div>
            <div className="plugin-install-content">
              <p className="plugin-method-note">{mode === "agent" ? c.promptHelp : c.terminalHelp}</p>
              {mode === "agent" ? <p className="plugin-agent-prompt">{c.prompt}</p> : <pre className="plugin-code"><code>{commands}</code></pre>}
              <button type="button" className="plugin-copy-button" onClick={copyInstall}>{mode === "agent" ? c.copyPrompt : c.copyCommands}<span aria-hidden="true">↗</span></button>
              <p className="plugin-copy-status" role="status">{state === "copied" ? mode === "agent" ? c.copied : c.commandsCopied : state === "failed" ? c.failed : ""}</p>
              {fallback && <textarea className="plugin-copy-fallback" aria-label={c.copyPrompt} readOnly value={fallback} onFocus={(event) => event.currentTarget.select()} />}
              <div className="plugin-next"><h3>{c.next[0]}</h3><p>{c.next[1]}</p><span className="plugin-message-label">{c.checkLabel}</span><p className="plugin-first-message">{c.check}</p></div>
            </div>
          </div>
        </div>
        <div className="plugin-install-boundary"><h3>{c.boundaryTitle}</h3><p>{c.boundary}</p><p>{c.scope}</p></div>
        <div className="plugin-legacy"><span>{c.legacy}</span> <a href={sourceLinks.release} target="_blank" rel="noreferrer">{c.legacyLink}</a><p>{c.legacyNote}</p></div>
      </div>
    </section>
  );
}
