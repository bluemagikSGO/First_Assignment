import React, { useState } from "react";
import styled from "styled-components";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
  ];

  const handleLanguageChange = (languageCode) => {
    setSelectedLanguage(languageCode);
    setIsOpen(false);
    // Add your language change logic here (i18n, context, etc.)
    console.log(`Language changed to ${languageCode}`);
  };

  const currentLanguage = languages.find(
    (lang) => lang.code === selectedLanguage
  );

  return (
    <DropdownContainer>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        <LanguageItem>
          <span>{currentLanguage.flag}</span>
          <span>{currentLanguage.name}</span>
        </LanguageItem>
        <ChevronIcon>{isOpen ? "▲" : "▼"}</ChevronIcon>
      </DropdownButton>

      {isOpen && (
        <DropdownList>
          {languages.map((language) => (
            <DropdownItem
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              $active={language.code === selectedLanguage}
            >
              <LanguageItem>
                <span>{language.flag}</span>
                <span>{language.name}</span>
              </LanguageItem>
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

// Styled Components
const DropdownContainer = styled.div`
  position: relative;
  width: 150px;
  font-family: "Segoe UI", sans-serif;
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 15px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #999;
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 5px;
  padding: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  list-style: none;
`;

const DropdownItem = styled.li`
  padding: 10px 15px;
  cursor: pointer;
  background: ${(props) => (props.$active ? "#f5f5f5" : "white")};
  transition: background 0.2s ease;

  &:hover {
    background: #f5f5f5;
  }

  &:first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  &:last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;

const LanguageItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ChevronIcon = styled.span`
  font-size: 12px;
  margin-left: 10px;
`;

export default LanguageSelector;
